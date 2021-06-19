Microsoft Open Technologies manifest files for Puppet
=====================================================

Microsoft Open Technologies is providing a Microsoft Azure Cloud Provisioner Module for Puppet that streamlines provisioning Microsoft Azure services like, virtual machines, virtual networks and SQL database services.

Requirements
------------

To enable bootstrapping Puppet agent, the following Windows Remote Management (WinRM) settings need to be updated.

To update these settings run these commands.

    $ winrm set winrm/config/service @{AllowUnencrypted="true"}

    $ winrm set winrm/config/service/auth @{Basic="true"}

The following gems are also required.

azure (&gt;= 0.6.4)

net-ssh (&gt;= 2.1.4)

net-scp (&gt;= 1.0.4)

Microsoft Azure
---------------

To provision a puppet agent on the Microsoft Azure platform, run the following command.

    puppet module install msopentech/microsoftazure --version 1.2.1

For more information on Microsoft Azure, [visit the Microsoft Azure website](http://www.windowsazure.com/en-us/solutions/infrastructure/).

Manifest files
--------------

Manifest files are collections of definitions, references (Including other manifest files.) and commands that enable you to quickly and repeatably deploy a configured virtual machine, virtual network or SQL database. There are provided manifest files which are listed below, the parameters they use and their defaults. Parameters with the value “undef” require you to supply the appropriate value.

**Enabling the puppet agent**  
Bootstrap.pp allows you to create a new instance with Puppet already installed and configured. When using the class, the reference will be,

    microsoftazure::bootstrap

This manifest takes the following parameters.

    $homedir = undef,
    $puppet_master_ip,
    $node_ipaddress,
    $ssh_user = undef,
    $winrm_user = undef,
    $private_key_file = undef,
    $winrm_port = undef,
    $password = undef,
    $ssh_port = 22,
    $winrm_transport = 'http'

**Creating a database**  
db.pp allows you to create a new instance of SQL server. When using the class, the reference will be,

    microsoftazure::db

This manifest takes the following parameters.

    $azure_management_certificate,
    $azure_subscription_id,
    $login,
    $password,
    $location

**Creating a vm**  
vm.pp allows you to create a new virtual machine instance. When using the class, the reference will be,

    microsoftazure::VM

This manifest takes the following parameters.

    $vm_name,
    $vm_user,
    $image,
    $location,
    $homedir = undef,
    $azure_management_certificate,
    $azure_subscription_id,
    $vm_size = 'Small',
    $puppet_master_ip = undef,
    $private_key_file = undef,
    $certificate_file = undef ,
    $storage_account_name = undef,
    $cloud_service_name = undef,
    $password = undef

**Creating a virtual network**  
vnet.pp allows you to create a new virtual network instance. When using the class, the reference will be,

    microsoftazure::vnet

This manifest takes the following parameters.

    $azure_management_certificate,
    $azure_subscription_id,
    $virtual_network_name,
    $affinity_group_name,
    $address_space,
    $subnets = undef,
    $dns_servers = undef

**Creating a virtual network, sql db and virtual machine**  
provisioner.pp allows you to create a new virtual network instance, sql db and virtual network. When using the class, the reference will be,

    microsoftazure::provisioner

This manifest takes the following parameters.

    $azure_management_certificate,
    $azure_subscription_id,
    $create_vnet, #true or false
    $virtual_network_name,
    $affinity_group_name,
    $address_space,
    $subnets,
    $dns_servers,
    $create_vm,  #true or false
    $vm_name,
    $vm_user,
    $image,
    $location,
    $homedir,
    $azure_management_certificate,
    $azure_subscription_id,
    $vm_size = 'Small',
    $puppet_master_ip,
    $private_key_file,
    $certificate_file,
    $storage_account_name,
    $cloud_service_name,
    $password,
    $create_sqldb,   #true or false
    $login,
    $password,
    $location

**Creating a cloud service**  
cloudservice.pp allows you to create a new cloud service. When using the class, the reference will be,

    microsoftazure::cloudservice

This manifest takes the following parameters.

    $azure_management_certificate,
    $azure_subscription_id,
    $cloud_service_name,
    $affinity_group_name,
    $location,
    $label = undef,
    $description = undef

**Creating a storage account**  
storage.pp allows you to create a new storage account. When using the class, the reference will be,

    microsoftazure::storage

This manifest takes the following parameters.

    $azure_management_certificate,
    $azure_subscription_id,
    $storage_account_name,
    $affinity_group_name,
    $location,
    $label = undef,
    $description = undef
