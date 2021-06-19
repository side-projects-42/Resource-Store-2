Microsoft Azure Cloud Provisioner
=================================

Microsoft Open Technologies and Puppet Enterprise provide support for working with virtual machine instances using Microsoft Azure. Using actions of the `puppet azure_vm` sub-command, you can launch and manage Microsoft Microsoft Azure services like virtual machines, virtual networks and SQL database services.

Required gems
-------------

The required gems and version are listed here.

azure (&gt;= 0.6.4)

net-ssh (&gt;= 2.1.4)

net-scp (&gt;= 1.0.4)

The provisioner tools
---------------------

The main actions used for Azure cloud provisioning include:

-   `puppet azure_vm list` for viewing existing instances
-   `puppet azure_vm create` for creating new instances
-   `puppet azure_vm terminate` for destroying no longer needed instances

If you are new to Microsoft Azure, we recommend reading the [Getting Started documentation](http://www.windowsazure.com).

Here is a quick look at some of the basic operations. For comprehensive information, see [Getting More Help](#getting-more-help) below.

Viewing existing virtual machines
---------------------------------

[Virtual Machines](http://www.windowsazure.com/en-us/services/virtual-machines/) are on-demand, scalable compute platforms that allow your business to meet its growing needs. Simply choose your compute configuration and system image and give your systems full obility by transferring your virtual hard disks between on-premises and the cloud.

Let’s start by finding out about the currently running virtual machine instances. You do this by running the `puppet azure_vm list` command.

    $ puppet azure_vm list

This shows all the running vm instances. For each instance, the following characteristics are shown:

-   The instance name
-   The date the instance was created
-   The DNS host name of the instance
-   The ID of the instance
-   The state of the instance, for example, running or terminated

**If you have no instances running, nothing will be returned.**

Creating a new virtual machine instance
---------------------------------------

New instances are created using the `azure_vm create` action. The `create` action simply builds a new virtual machine instance. The bootstrap “wrapper” action creates, classifies, and then initializes the node all in one command.

### Using `create`

The `azure_vm create` subcommand is used to build a new virtual machine instance based on a selected AMI image.

The subcommand has some required options:

-   The management certificate (pem or pfx file) we’d like to use. (`–management-certificate`)
-   The Azure Subscription we’d like to use. (`–azure-subscription-id`)
-   The AMI image we’d like to use. (`–image`)
-   The location we’d like our new vm to run in. (`–location`)
-   The name for our vm. (`–vm-name`)
-   The username and password we’d like to use. (`–vm-user –password`)
-   The puppet master IP address. (`–puppet-master-ip`)

Provide this information and run the command:

    $ puppet azure_vm create --management-certificate pem-or-pfx-file-path --azure-subscription-id=your-subscription-id \
    --image b39f27a8b8c64d52b05eac6a62ebad85__Ubuntu-13_04-amd64-server-20130501-en-us-30GB --location 'west us' 
    --vm-name vmname --vm-user username --password ComplexPassword  --puppet-master-ip 198.62.195.5

Once launched, you should be able to SSH to the new system using the username and password.

You can also specify a variety of other options, including delete, images, servers and start. You can see a full list of these options by running `puppet help azure_vm create`.

### Using `bootstrap`

The `bootstrap` action is a wrapper that combines several actions, allowing you to create, classify, install Puppet on, and sign the certificate of your Azure virtual machine instances. Classification is done via the Console.

The example below will bootstrap a node using a Linux image, located in the US West region.

    $ puppet azure_vm create --bootstrap --management-certificate pem-or-pfx-file-path --azure-subscription-id=your-subscription-id \
    --image b39f27a8b8c64d52b05eac6a62ebad85__Ubuntu-13_04-amd64-server-20130501-en-us-30GB --location 'west us' 
    --vm-name vmname --vm-user username --password ComplexPassword  --puppet-master-ip 198.62.195.5

Creating and managing a virtual network
---------------------------------------

[Virtual Networks](http://www.windowsazure.com/en-us/services/virtual-network/) are logicaly isolated sections in the cloud that you can then securly connect to your on-premises data center. Virtual networks make it easy to extend your data center and manage it like your on-premises infrastructure.

You can create and manage a virtual network from the command line. Using the virtual\_network set action as in this example.

    $ puppet azure_vnet set --management-certificate pem-or-pfx-file-path --azure-subscription-id=your-subscription-id
    --virtual-network-name vnetname --affinity-group-name ag-name --address-space '172.16.0.0/12,192.168.0.0/16'
    --dns-servers 'dns1-1:10.10.8.8,dns2:172.8.4.4' --subnets 'subnet-1:172.16.0.0:12,subnet-2:192.168.0.0:29'

Other available actions are list and set\_xml\_schema which configures the virtual network using a provided xml schema as hown in this example

    puppet azure_vnet set_xml_schema --management-certificate ~/exp/azuremanagement.pem --azure-subscription-id=268a3762-fce0-4cd3-a4ea-80e84bddff87
      --xml-schema-file /home/ranjan/network.xml

Creating and managing a SQL database server
-------------------------------------------

[Microsoft Azure SQL Database](http://www.windowsazure.com/en-us/services/sql-database/) is a fully managed relational database service that delivers flexible manageability, includes built-in high availability, offers predictable performance, and supports massive scale-out.

You can create and manage a SQL server as in the following example.

    $ puppet azure_sqldb create --management-certificate pem-or-pfx-file-path --azure-subscription-id=your-subscription-id \
    --management-endpoint=https://management.database.windows.net:8443/ --login loginname --password ComplexPassword --location 'West Us'

Other available actions are list and set\_xml\_schema which configures the virtual network using a provided xml schema

Certificate Management
----------------------

A [management certificate](http://msdn.microsoft.com/en-us/library/windowsazure/gg981929.aspx) is needed when you want to use the Service Management API to interact with the Microsoft Azure image platform. Stored at the subscription level, these certificates are independent of any hosted service or deployment.

Currently the sdk supports *.pem or* .pfx (passwordless pfx) for service management operations. The following are the steps to obtain and extract you management certificates.

To create a pfx, simply download the publishsettings file for your subscription, copy the contents of Management Certificate from the publishsettings and save it in a file and name the file as your cert.pfx. This pfx will be a passwordless pfx which can be supplied as a cert parameter for Service Management Commands

To extract pem from a custom certificate, export the pfx, use the following openssl commands to extract the pem file and pass the pem file as management cert parameter.

To get only private key from pfx use Openssl.exe pkcs12 -in cert.pfx -nocerts -out cert.pem

To remove passphrase from the above private key use Openssl.exe rsa -in cert.pem -out certprivnopassword.pem

To extract both public & private keys from pfx use Openssl.exe pkcs12 -in cert.pfx -out certprivpub.pem

To extract only public key from pem use Openssl x509 -inform pem -in certprivpub.pem -pubkey -out certpub.pem -outform pem

Finally copy the public key & private key to a file \*.pem and pass that pem file to management cert parameter.

Getting more help
-----------------

The `puppet azure_vm` command has extensive in-line help documentation.

To see the available actions and command line options, run:

    $ puppet help azure_vm <action>

    This subcommand provides a command line interface to work with Microsoft Azure virtual
    machine instances. The goal of these actions are to easily create new
    machines, install Puppet onto them, and tear them down when they're no longer
    required.

    OPTIONS:
      --mode MODE                    - The run mode to use (user, agent, or master).
      --render-as FORMAT             - The rendering format to use.
      --verbose                      - Whether to log verbosely.
      --debug                        - Whether to log debug information.

    ACTIONS:
      bootstrap        Install puppet node on a Microsoft Azure VM
      create           Create a Microsoft Azure VM
      delete           Delete a Microsoft Azure node instance
      servers          List Microsoft Azure node instances
      shutdown         Shutdown Microsoft Azure node instance
      start            Starts Microsoft Azure node instance

    See 'puppet help azure_vm' or 'help puppet-azure_vm' for full help.

For more detailed help you can also view the help page .

    $ puppet help azure_vm

You can get help on individual actions by running:

    $ puppet help azure_vm <ACTION>

For example,

    $ puppet help azure_vm list
