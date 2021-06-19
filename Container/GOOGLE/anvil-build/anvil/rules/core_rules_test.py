#!/usr/bin/python

# Copyright 2012 Google Inc. All Rights Reserved.

"""Tests for the core_rules module.
"""

__author__ = 'benvanik@google.com (Ben Vanik)'


import os
import unittest2

from anvil.context import BuildContext, BuildEnvironment, Status
from anvil.project import FileModuleResolver, Project
from anvil.test import FixtureTestCase, RuleTestCase
from core_rules import *


class FileSetRuleTest(RuleTestCase):
  """Behavioral tests of the FileSetRule type."""
  fixture='core_rules/file_set'

  def setUp(self):
    super(FileSetRuleTest, self).setUp()
    self.build_env = BuildEnvironment(root_path=self.root_path)

  def test(self):
    project = Project(module_resolver=FileModuleResolver(self.root_path))

    with BuildContext(self.build_env, project) as ctx:
      self.assertTrue(ctx.execute_sync([
          ':a',
          ':a_glob',
          ':b_ref',
          ':all_glob',
          ':combo',
          ':dupes',
          'dir:b',
          'dir:b_glob',
          ]))

      self.assertRuleResultsEqual(ctx,
          ':a', ['a.txt',])
      self.assertRuleResultsEqual(ctx,
          ':a_glob', ['a.txt',])
      self.assertRuleResultsEqual(ctx,
          ':b_ref', ['dir/b.txt',])
      self.assertRuleResultsEqual(ctx,
          ':all_glob', ['a.txt', 'dir/b.txt',])
      self.assertRuleResultsEqual(ctx,
          ':combo', ['a.txt', 'dir/b.txt',])
      self.assertRuleResultsEqual(ctx,
          ':dupes', ['a.txt', 'dir/b.txt',])
      self.assertRuleResultsEqual(ctx,
          'dir:b', ['dir/b.txt',])
      self.assertRuleResultsEqual(ctx,
          'dir:b_glob', ['dir/b.txt',])


class CopyFilesRuleTest(RuleTestCase):
  """Behavioral tests of the CopyFilesRule type."""
  fixture='core_rules/copy_files'

  def setUp(self):
    super(CopyFilesRuleTest, self).setUp()
    self.build_env = BuildEnvironment(root_path=self.root_path)

  def test(self):
    project = Project(module_resolver=FileModuleResolver(self.root_path))

    with BuildContext(self.build_env, project) as ctx:
      self.assertTrue(ctx.execute_sync([
          ':copy_all_txt',
          'dir:copy_c',
          ]))

      self.assertRuleResultsEqual(ctx,
          ':copy_all_txt', ['a.txt',
                            'dir/b.txt'],
          output_prefix='build-out')
      self.assertFileContents(
          os.path.join(self.root_path, 'build-out/a.txt'),
          'a\n')
      self.assertFileContents(
          os.path.join(self.root_path, 'build-out/dir/b.txt'),
          'b\n')

      self.assertRuleResultsEqual(ctx,
          'dir:copy_c', ['dir/c.not-txt',],
          output_prefix='build-out')
      self.assertFileContents(
          os.path.join(self.root_path, 'build-out/dir/c.not-txt'),
          'c\n')


class ConcatFilesRuleTest(RuleTestCase):
  """Behavioral tests of the ConcatFilesRule type."""
  fixture='core_rules/concat_files'

  def setUp(self):
    super(ConcatFilesRuleTest, self).setUp()
    self.build_env = BuildEnvironment(root_path=self.root_path)

  def test(self):
    project = Project(module_resolver=FileModuleResolver(self.root_path))

    with BuildContext(self.build_env, project) as ctx:
      self.assertTrue(ctx.execute_sync([
          ':concat',
          ':concat_out',
          ':concat_template',
          ':templated',
          ]))

      self.assertRuleResultsEqual(ctx,
          ':concat', ['concat',],
          output_prefix='build-out')
      self.assertFileContents(
          os.path.join(self.root_path, 'build-out/concat'),
          '1\n2\n3\n4\n')

      self.assertRuleResultsEqual(ctx,
          ':concat_out', ['concat.txt',],
          output_prefix='build-out')
      self.assertFileContents(
          os.path.join(self.root_path, 'build-out/concat.txt'),
          '1\n2\n3\n4\n')

      self.assertRuleResultsEqual(ctx,
          ':concat_template', ['concat_template',],
          output_prefix='build-out')
      self.assertFileContents(
          os.path.join(self.root_path, 'build-out/concat_template'),
          '1\n2\n3\n4\nx${hello}x\n1\n2\n3\n4\n')
      self.assertRuleResultsEqual(ctx,
          ':templated', ['concat_template.out',],
          output_prefix='build-out')
      self.assertFileContents(
          os.path.join(self.root_path, 'build-out/concat_template.out'),
          '1\n2\n3\n4\nxworld!x\n1\n2\n3\n4\n')


if __name__ == '__main__':
  unittest2.main()
