#!/usr/bin/python

# Copyright 2012 Google Inc. All Rights Reserved.

"""Tests for the manage module.
"""

__author__ = 'benvanik@google.com (Ben Vanik)'


import types
import unittest2

from anvil import manage
from anvil.manage import *
from anvil import test
from anvil.test import AsyncTestCase, FixtureTestCase


class ManageTest(FixtureTestCase):
  """Behavioral tests for the management wrapper."""
  fixture = 'manage'

  def setUp(self):
    super(ManageTest, self).setUp()

  def testDiscovery(self):
    # Check built-in
    search_paths = [os.path.join(util.get_anvil_path(), 'commands')]
    commands = manage.discover_commands(search_paths)
    self.assertTrue(commands.has_key('build'))
    self.assertIsInstance(commands['build'], ManageCommand)

    # Check custom
    commands = manage.discover_commands(
        [os.path.join(self.root_path, 'commands')])
    self.assertTrue(commands.has_key('test_command'))
    test_command = commands['test_command']
    self.assertIsInstance(test_command, ManageCommand)
    args = test_command.create_argument_parser()
    parsed_args = args.parse_args([])
    cwd = os.getcwd()
    self.assertEqual(commands['test_command'].execute(parsed_args, cwd), 123)

    # Duplicate command names/etc
    with self.assertRaises(KeyError):
      manage.discover_commands([os.path.join(self.root_path, 'bad_commands')])

  def testUsage(self):
    search_paths = [os.path.join(util.get_anvil_path(), 'commands')]
    commands = manage.discover_commands(search_paths)
    self.assertNotEqual(len(manage.usage(commands)), 0)

  def testRunCommand(self):
    class SomeCommand(ManageCommand):
      def __init__(self):
        super(SomeCommand, self).__init__(name='some_command')
      def execute(self, args, cwd):
        return 123
    self.assertEqual(manage.run_command(
        SomeCommand(), [], os.getcwd()), 123)

    # TODO(benvanik): add test for argument parsing

  def testAutocomplete(self):
    # TODO(benvanik): test autocomplete
    pass

  def testMain(self):
    pass


if __name__ == '__main__':
  unittest2.main()
