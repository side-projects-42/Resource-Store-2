CodeMirror: Puppet mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">Puppet</a>

Puppet mode
-----------

\# == Class: automysqlbackup \# \# Puppet module to install AutoMySQLBackup for periodic MySQL backups. \# \# class { ‘automysqlbackup’: \# backup\_dir =&gt; ‘/mnt/backups’, \# } \# class automysqlbackup ( $bin\_dir = $automysqlbackup::params::bin\_dir, $etc\_dir = $automysqlbackup::params::etc\_dir, $backup\_dir = $automysqlbackup::params::backup\_dir, $install\_multicore = undef, $config = {}, <span class="math inline">$config\\\_defaults = {}, ) inherits automysqlbackup::params { \\\# Ensure valid paths are assigned validate\\\_absolute\\\_path($</span>bin\_dir) validate\_absolute\_path(<span class="math inline">*etc*\_*dir*)*validate*\_*absolute*\_*path*(</span>backup\_dir) \# Create a subdirectory in /etc for config files file { <span class="math inline">$etc\\\_dir: ensure =&gt; directory, owner =&gt; 'root', group =&gt; 'root', mode =&gt; '0750', } \\\# Create an example backup file, useful for reference file { "$</span>{etc\_dir}/automysqlbackup.conf.example“: ensure =&gt; file, owner =&gt; ‘root’, group =&gt; ‘root’, mode =&gt; ‘0660’, source =&gt; ‘puppet:///modules/automysqlbackup/automysqlbackup.conf’, } \# Add files from the developer file {”<span class="math inline">${etc\\\_dir}/AMB\\\_README": ensure =&gt; file, source =&gt; 'puppet:///modules/automysqlbackup/AMB\\\_README', } file { "$</span>{etc\_dir}/AMB\_LICENSE“: ensure =&gt; file, source =&gt; ‘puppet:///modules/automysqlbackup/AMB\_LICENSE’, } \# Install the actual binary file file {”${bin\_dir}/automysqlbackup": ensure =&gt; file, owner =&gt; ‘root’, group =&gt; ‘root’, mode =&gt; ‘0755’, source =&gt; ‘puppet:///modules/automysqlbackup/automysqlbackup’, } \# Create the base backup directory file { <span class="math inline">$backup\\\_dir: ensure =&gt; directory, owner =&gt; 'root', group =&gt; 'root', mode =&gt; '0755', } \\\# If you'd like to keep your config in hiera and pass it to this class if !empty($</span>config) { create\_resources(‘automysqlbackup::backup’, $config, $config\_defaults) } \# If using RedHat family, must have the RPMforge repo’s enabled if $install\_multicore { package { \[‘pigz’, ‘pbzip2’\]: ensure =&gt; installed } } }

**MIME types defined:** `text/x-puppet`.
