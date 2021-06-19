/*
 * Copyright (C) 2017 The Dagger Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package dagger.internal.codegen.writing;

import static com.google.common.base.Preconditions.checkNotNull;
import static com.squareup.javapoet.MethodSpec.methodBuilder;
import static dagger.internal.codegen.binding.AssistedInjectionAnnotations.assistedParameterSpecs;
import static dagger.internal.codegen.javapoet.CodeBlocks.parameterNames;
import static dagger.internal.codegen.writing.ComponentImplementation.MethodSpecKind.PRIVATE_METHOD;
import static javax.lang.model.element.Modifier.PRIVATE;

import com.google.common.collect.ImmutableList;
import com.squareup.javapoet.CodeBlock;
import com.squareup.javapoet.TypeName;
import dagger.assisted.Assisted;
import dagger.assisted.AssistedFactory;
import dagger.assisted.AssistedInject;
import dagger.internal.codegen.binding.BindingRequest;
import dagger.internal.codegen.binding.ContributionBinding;
import dagger.internal.codegen.compileroption.CompilerOptions;
import dagger.internal.codegen.langmodel.DaggerTypes;
import dagger.internal.codegen.writing.ComponentImplementation.ShardImplementation;
import dagger.model.BindingKind;
import dagger.model.RequestKind;
import javax.lang.model.type.TypeMirror;

/**
 * A binding expression that wraps the dependency expressions in a private, no-arg method.
 *
 * <p>Dependents of this binding expression will just call the no-arg private method.
 */
final class PrivateMethodBindingExpression extends MethodBindingExpression {
  private final ShardImplementation shardImplementation;
  private final ContributionBinding binding;
  private final BindingRequest request;
  private final BindingExpression wrappedBindingExpression;
  private final CompilerOptions compilerOptions;
  private final DaggerTypes types;
  private String methodName;

  @AssistedInject
  PrivateMethodBindingExpression(
      @Assisted BindingRequest request,
      @Assisted ContributionBinding binding,
      @Assisted BindingExpression wrappedBindingExpression,
      ComponentImplementation componentImplementation,
      DaggerTypes types,
      CompilerOptions compilerOptions) {
    super(componentImplementation.shardImplementation(binding), types);
    this.binding = checkNotNull(binding);
    this.request = checkNotNull(request);
    this.wrappedBindingExpression = checkNotNull(wrappedBindingExpression);
    this.shardImplementation = componentImplementation.shardImplementation(binding);
    this.compilerOptions = compilerOptions;
    this.types = types;
  }

  @Override
  protected CodeBlock methodCall() {
    return binding.kind() == BindingKind.ASSISTED_INJECTION
        // Private methods for assisted injection take assisted parameters as input.
        ? CodeBlock.of(
            "$N($L)", methodName(), parameterNames(assistedParameterSpecs(binding, types)))
        : CodeBlock.of("$N()", methodName());
  }

  @Override
  protected TypeMirror returnType() {
    if (request.isRequestKind(RequestKind.INSTANCE)
        && binding.contributedPrimitiveType().isPresent()) {
      return binding.contributedPrimitiveType().get();
    }

    TypeMirror requestedType = request.requestedType(binding.contributedType(), types);
    return types.accessibleType(requestedType, shardImplementation.name());
  }

  private String methodName() {
    if (methodName == null) {
      // Have to set methodName field before implementing the method in order to handle recursion.
      methodName = shardImplementation.getUniqueMethodName(request);

      // TODO(bcorso): Fix the order that these generated methods are written to the component.
      shardImplementation.addMethod(
          PRIVATE_METHOD,
          methodBuilder(methodName)
              .addModifiers(PRIVATE)
              .addParameters(
                  // Private methods for assisted injection take assisted parameters as input.
                  binding.kind() == BindingKind.ASSISTED_INJECTION
                      ? assistedParameterSpecs(binding, types)
                      : ImmutableList.of())
              .returns(TypeName.get(returnType()))
              .addStatement(
                  "return $L",
                  wrappedBindingExpression
                      .getDependencyExpression(shardImplementation.name())
                      .codeBlock())
              .build());
    }
    return methodName;
  }

  @AssistedFactory
  static interface Factory {
    PrivateMethodBindingExpression create(
        BindingRequest request,
        ContributionBinding binding,
        BindingExpression wrappedBindingExpression);
  }
}
