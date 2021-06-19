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

import com.squareup.javapoet.CodeBlock;
import dagger.assisted.Assisted;
import dagger.assisted.AssistedFactory;
import dagger.assisted.AssistedInject;
import dagger.internal.codegen.binding.ComponentDescriptor.ComponentMethodDescriptor;
import dagger.internal.codegen.langmodel.DaggerTypes;
import javax.lang.model.type.TypeMirror;

/**
 * A binding expression that implements and uses a component method.
 *
 * <p>Dependents of this binding expression will just call the component method.
 */
final class ComponentMethodBindingExpression extends MethodBindingExpression {
  private final BindingExpression wrappedBindingExpression;
  private final ComponentImplementation componentImplementation;
  private final ComponentMethodDescriptor componentMethod;
  private final DaggerTypes types;

  @AssistedInject
  ComponentMethodBindingExpression(
      @Assisted BindingExpression wrappedBindingExpression,
      @Assisted ComponentMethodDescriptor componentMethod,
      ComponentImplementation componentImplementation,
      DaggerTypes types) {
    super(componentImplementation.getComponentShard(), types);
    this.wrappedBindingExpression = checkNotNull(wrappedBindingExpression);
    this.componentMethod = checkNotNull(componentMethod);
    this.componentImplementation = componentImplementation;
    this.types = types;
  }

  @Override
  protected CodeBlock getComponentMethodImplementation(
      ComponentMethodDescriptor componentMethod, ComponentImplementation component) {
    // There could be several methods on the component for the same request key and kind.
    // Only one should use the BindingMethodImplementation; the others can delegate that one.
    // Separately, the method might be defined on a supertype that is also a supertype of some
    // parent component. In that case, the same ComponentMethodDescriptor will be used to add a CMBE
    // for the parent and the child. Only the parent's should use the BindingMethodImplementation;
    // the child's can delegate to the parent. So use methodImplementation.body() only if
    // componentName equals the component for this instance.
    return componentMethod.equals(this.componentMethod) && component.equals(componentImplementation)
        ? CodeBlock.of(
            "return $L;",
            wrappedBindingExpression
                .getDependencyExpressionForComponentMethod(componentMethod, componentImplementation)
                .codeBlock())
        : super.getComponentMethodImplementation(componentMethod, component);
  }

  @Override
  protected CodeBlock methodCall() {
    return CodeBlock.of("$N()", componentMethod.methodElement().getSimpleName());
  }

  @Override
  protected TypeMirror returnType() {
    return componentMethod.resolvedReturnType(types);
  }

  @AssistedFactory
  static interface Factory {
    ComponentMethodBindingExpression create(
        BindingExpression wrappedBindingExpression,
        ComponentMethodDescriptor componentMethod);
  }
}
