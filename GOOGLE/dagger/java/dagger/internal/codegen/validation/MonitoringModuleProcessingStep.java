/*
 * Copyright (C) 2015 The Dagger Authors.
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

package dagger.internal.codegen.validation;

import com.google.auto.common.MoreElements;
import com.google.common.collect.ImmutableSet;
import com.squareup.javapoet.ClassName;
import dagger.internal.codegen.javapoet.TypeNames;
import javax.annotation.processing.Messager;
import javax.inject.Inject;
import javax.lang.model.element.TypeElement;

/**
 * A processing step that is responsible for generating a special module for a {@link
 * dagger.producers.ProductionComponent} or {@link dagger.producers.ProductionSubcomponent}.
 */
public final class MonitoringModuleProcessingStep extends TypeCheckingProcessingStep<TypeElement> {
  private final Messager messager;
  private final MonitoringModuleGenerator monitoringModuleGenerator;

  @Inject
  MonitoringModuleProcessingStep(
      Messager messager, MonitoringModuleGenerator monitoringModuleGenerator) {
    super(MoreElements::asType);
    this.messager = messager;
    this.monitoringModuleGenerator = monitoringModuleGenerator;
  }

  @Override
  public ImmutableSet<ClassName> annotationClassNames() {
    return ImmutableSet.of(TypeNames.PRODUCTION_COMPONENT, TypeNames.PRODUCTION_SUBCOMPONENT);
  }

  @Override
  protected void process(TypeElement element, ImmutableSet<ClassName> annotations) {
      monitoringModuleGenerator.generate(MoreElements.asType(element), messager);
  }
}
