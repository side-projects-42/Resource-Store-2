// Copyright 2012 Traceur Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { ExportVisitor } from "../codegeneration/module/ExportVisitor.js";
import { ImportStarVisitor } from "../codegeneration/module/ImportStarVisitor.js";
import { ModuleDeclarationVisitor } from "../codegeneration/module/ModuleDeclarationVisitor.js";
import { ModuleDefinitionVisitor } from "../codegeneration/module/ModuleDefinitionVisitor.js";
import { ValidationVisitor } from "../codegeneration/module/ValidationVisitor.js";

// TODO(arv): Validate that there are no free variables
// TODO(arv): Validate that the exported reference exists

/**
 * Builds up all module symbols and validates them.
 */
export class ModuleAnalyzer {
  /**
   * @param {ErrorReporter} reporter
   * @param {Project} project
   */
  constructor(reporter, project) {
    this.reporter_ = reporter;
    this.project_ = project;
  }

  /**
   * @return {void}
   */
  analyze() {
    this.analyzeTrees(this.project_.getParseTrees());
  }

  /**
   * @param {SourceFile} sourceFile
   * @return {void}
   */
  analyzeFile(sourceFile) {
    var trees = [this.project_.getParseTree(sourceFile)];
    this.analyzeTrees(trees);
  }

  /**
   * @param {Array.<ParseTree>} trees
   * @return {void}
   */
  analyzeTrees(trees) {
    this.analyzeModuleTrees(trees);
  }

  /**
   * @param {ParseTree} tree
   * @param {Array.<ModuleSymbol>=} roots
   * @return {void}
   */
  analyzeModuleTrees(trees, roots = undefined) {
    var reporter = this.reporter_;
    var project = this.project_;
    var root = project.getRootModule();

    function getRoot(i) {
      return roots ? roots[i] : root;
    }

    function doVisit(ctor) {
      for (var i = 0; i < trees.length; i++) {
        var visitor = new ctor(reporter, project, getRoot(i));
        visitor.visitAny(trees[i]);
      }
    }

    doVisit(ModuleDefinitionVisitor);
    doVisit(ExportVisitor);
    doVisit(ModuleDeclarationVisitor);
    doVisit(ValidationVisitor);
    doVisit(ImportStarVisitor);
  }
}
