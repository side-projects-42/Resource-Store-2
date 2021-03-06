// Copyright 2012 Traceur Authors.
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { ParseTreeWriter } from "./ParseTreeWriter.js";

/**
 * Converts a ParseTree to text and a source Map
 */
export class ParseTreeMapWriter extends ParseTreeWriter {
  /**
   * @param {ParseTree} highlighted
   * @param {boolean} showLineNumbers
   * @param {SourceMapGenerator} sourceMapGenerator
   */
  constructor(highlighted, showLineNumbers, sourceMapGenerator) {
    super(highlighted, showLineNumbers);
    this.sourceMapGenerator_ = sourceMapGenerator;
    this.outputLineCount_ = 1;
  }

  write_(value) {
    if (this.currentLocation) {
      this.addMapping();
    }
    super.write_(value);
  }

  writeCurrentln_() {
    super.writeCurrentln_();
    this.outputLineCount_++;
  }

  addMapping() {
    var mapping = {
      generated: {
        line: this.outputLineCount_,
        column: this.currentLine_.length,
      },
      original: {
        // +1 because line is zero based
        line: this.currentLocation.start.line + 1,
        column: this.currentLocation.start.column,
      },
      source: this.currentLocation.start.source.name,
    };
    this.sourceMapGenerator_.addMapping(mapping);
  }
}
