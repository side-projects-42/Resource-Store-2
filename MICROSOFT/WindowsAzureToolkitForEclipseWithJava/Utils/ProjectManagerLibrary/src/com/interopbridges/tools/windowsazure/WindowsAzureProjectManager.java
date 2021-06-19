/**
 * Copyright (c) Microsoft Corporation
 * 
 * All rights reserved. 
 * 
 * MIT License
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
 * (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, 
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR 
 * ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH 
 * THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

package com.interopbridges.tools.windowsazure;

import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;
import java.util.Vector;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.w3c.dom.Comment;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

/**
 * Class representing Azure project.
 */
public class WindowsAzureProjectManager {
	private String configFilePath = "";
	private String defFilePath = "";
	private String packageFilePath = "";
	private Document packageFileDoc;
	private Document configFileDoc;
	private Document definitionFileDoc;
	protected String projDirPath;
	private WindowsAzureProjectManager winAzureProjMgr = null;
	protected List<WindowsAzureRole> roleList = new ArrayList<WindowsAzureRole>();
	protected Map<String, Vector<String>> mapActivity = new HashMap<String, Vector<String>>();
	private static final int BUFF_SIZE = 1024;

	private static enum WAvmSize {
		EXTRASMALL, SMALL, MEDIUM, LARGE, EXTRALARGE, A5, A6, A7, A8, A9, STANDARD_D1, STANDARD_D2, STANDARD_D3, STANDARD_D4,
		STANDARD_D11, STANDARD_D12, STANDARD_D13, STANDARD_D14
	};

	private static String[] vmSize = { "extrasmall", "small", "medium",
			"large", "extralarge", "a5", "a6", "a7", "a8", "a9", 
			"standard_d1", "standard_d2", "standard_d3", "standard_d4",
			"standard_d11", "standard_d12", "standard_d13", "standard_d14"};
	private static Set<String> waVmSize = new HashSet<String>(
			Arrays.asList(vmSize));
	private static final String ENV_PROGRAMFILES_WOW64 = "ProgramW6432";
	private static final String ENV_X86_PROGRAMFILES_WOW64 = "ProgramFiles(x86)";
	private static final String ENV_PROGRAMFILES = "ProgramFiles";

	WindowsAzureProjectManager(File projDirectoryPath)
			throws WindowsAzureInvalidProjectOperationException {
		XPath xPath = XPathFactory.newInstance().newXPath();
		
		packageFilePath = String.format("%s%s%s", projDirectoryPath,
				File.separator, "package.xml");
		packageFileDoc = ParserXMLUtility.parseXMLFile(packageFilePath);
		projDirPath = projDirectoryPath.toString();
		roleList = new ArrayList<WindowsAzureRole>();
		if (packageFileDoc != null) {
			try {
				configFilePath = String.format("%s%s%s", projDirectoryPath,
						File.separator, xPath.evaluate(
								WindowsAzureConstants.CONFIG_FILE_NAME,
								packageFileDoc));
				defFilePath = String.format("%s%s%s", projDirectoryPath,
						File.separator, xPath.evaluate(
								WindowsAzureConstants.DEF_FILE_NAME,
								packageFileDoc));
			} catch (Exception ex) {
				throw new WindowsAzureInvalidProjectOperationException(
						WindowsAzureConstants.EXCP_RETRIEVE_DATA, ex);
			}
		}
	}

	/**
	 * Creates a new instance of WindowsAzureProjectManager.
	 * 
	 * @param projectDirectoryPath
	 * @param fileName
	 *            .
	 * @return WindowsAzureProjectManager instance .
	 * @throws WindowsAzureInvalidProjectOperationException .
	 * @throws IOException .
	 */
	public static WindowsAzureProjectManager create(String fileName)
			throws WindowsAzureInvalidProjectOperationException, IOException {
		if ((fileName == null) || (fileName.isEmpty())) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		}
		ZipFile zipFile = new ZipFile(fileName);
		String tmpPath = System.getProperty("java.io.tmpdir");
		try {
			String projPath = String.format("%s%s%s", tmpPath, File.separator,
					"%proj%");
			File projFile = new File(projPath);
			if (projFile != null) {
				File[] files = projFile.listFiles();
				if (files != null) {
					for (File file : files) {
						String tmpFileName = file.getName();
						if (!(tmpFileName.equalsIgnoreCase(".externalToolBuilders")
								|| tmpFileName.equals("deploy")
								|| tmpFileName.equalsIgnoreCase(".cspack.jar")
								|| tmpFileName.equalsIgnoreCase("lib")
								|| tmpFileName.equalsIgnoreCase("cert"))) {
							// delete
							if (file.isDirectory()) {
								deleteDir(file);
							} else {
								file.delete();
							}
						}
					}
				}
			}
			Enumeration<? extends ZipEntry> entries = zipFile.entries();
			String entryName;
			while (entries.hasMoreElements()) {
				ZipEntry zipEntry = (ZipEntry) entries.nextElement();
				entryName = zipEntry.getName();
				String outputPath = tmpPath.concat(File.separator).concat(entryName);
				File outputFile = new File(outputPath);

				if (!outputFile.exists()) {
					if (zipEntry.isDirectory()) {
						(new File(tmpPath.concat(File.separator).concat(entryName))).mkdir();
						continue;
					}
					dataTransfer(zipFile.getInputStream(zipEntry),
							new BufferedOutputStream(new FileOutputStream(outputFile)));
				}
			}
		} catch (IOException e) {
			throw new IOException();
		} finally {
			zipFile.close();
		}

		try {
			WindowsAzureProjectManager winAzureProjMgr = new WindowsAzureProjectManager(
					new File(String.format("%s%s%s", tmpPath, File.separator,
							"%proj%")));
			winAzureProjMgr.setWindowsAzureProjMgr(winAzureProjMgr);
			return winAzureProjMgr;
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_INITIALIZE, ex);
		}
	}

	/**
	 * Loads and deserializes WindowsAzureProjectManager from specified location
	 * on disk.
	 * 
	 * @param projDirectoryPath
	 * @return WindowsAzureProjectManager instance.
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static WindowsAzureProjectManager load(File projDirectoryPath)
			throws WindowsAzureInvalidProjectOperationException {
		/**
		 * Read project xml file and get the following parameters
		 * configurationfilename definitionfilename
		 */
		if (projDirectoryPath == null) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		}
		WindowsAzureProjectManager waProjectManager;
		try {
			waProjectManager = new WindowsAzureProjectManager(projDirectoryPath);
			waProjectManager.setWindowsAzureProjMgr(waProjectManager);
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_RETRIEVE_DATA, ex);
		}
		return waProjectManager;
	}

	/**
	 * Validates the specified role name.
	 * 
	 * @param roleName
	 * @return true if the role name is valid; false otherwise.
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public Boolean isAvailableRoleName(String roleName)
			throws WindowsAzureInvalidProjectOperationException {
		Boolean isAvaRname = true;
		try {

			if ((roleName == null)
					|| (roleName.isEmpty() || (roleName.isEmpty()))) {
				isAvaRname = false;
			} else {
				List<WindowsAzureRole> roles = getRoles();
				for (int i = 0; i < roles.size(); i++) {
					if (roles.get(i).getName().equalsIgnoreCase(roleName)) {
						isAvaRname = false;
						break;
					}
				}
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_IS_AVAILABLE_ROLENAME, e);
		}
		return isAvaRname;
	}

	/**
	 * Validates the specified service name.
	 * 
	 * @param serviceName
	 * @return true if the service name is valid; false otherwise.
	 * @throws WindowsAzureInvalidProjectOperationException .
	 */
	public Boolean isValidServiceName(String serviceName)
			throws WindowsAzureInvalidProjectOperationException {
		Boolean isAvaSname = true;
		if ((serviceName == null) || (serviceName.isEmpty())) {
			isAvaSname = false;
		} else {
			try {
				if (winAzureProjMgr.getServiceName().equalsIgnoreCase(
						serviceName)) {
					isAvaSname = false;
				}
			} catch (Exception e) {
				throw new WindowsAzureInvalidProjectOperationException(
						WindowsAzureConstants.EXCP_IS_AVAILABLE_SERVICE_NAME, e);
			}
		}
		return isAvaSname;
	}

	/**
	 * Validates the specified port.
	 * 
	 * @param port
	 * @param endpointType
	 * @return true if the port if valid; false otherwise.
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public Boolean isValidPort(String port,
			WindowsAzureEndpointType endpointType)
			throws WindowsAzureInvalidProjectOperationException {
		Boolean isValidPort = true;
		try {

			if ((port == null) || port.isEmpty() || (endpointType == null)) {
				isValidPort = false;
			} else if (isValidPort
					&& (endpointType == WindowsAzureEndpointType.InstanceInput)
					&& (port.contains("-"))) {
				// inside Instance input check
				String[] ports = port.split("-");
				int min = Integer.parseInt(ports[0]);
				int max = Integer.parseInt(ports[1]);
				if (min > max) {
					return false;
				}
				for (int i = min; i <= max; i++) {
					isValidPort = isValidPort(String.valueOf(i),
							WindowsAzureEndpointType.InstanceInput);
					if (!isValidPort) {
						break;
					}
				}
				return isValidPort;
			} else if (isValidPort) {
				try {
					Integer.parseInt(port);
				} catch (NumberFormatException nExcp) {
					isValidPort = false;
				}
			}
			if (isValidPort) {
				// Check for internal \ input endpoint
				List<WindowsAzureRole> roles = getRoles();
				for (int i = 0; i < roles.size(); i++) {
					List<WindowsAzureEndpoint> endPoints = roles.get(i)
							.getEndpoints();
					for (int nEndpoint = 0; nEndpoint < endPoints.size(); nEndpoint++) {
						if (endPoints.get(nEndpoint).getPort()
								.equalsIgnoreCase(port)
								|| endPoints.get(nEndpoint)
										.getPrivatePortWrapper()
										.equalsIgnoreCase(port)) {
							isValidPort = false;
							break;
						}
					}
				}
			}

			if (isValidPort) {
				isValidPort = checkForInstanceEp(port);
			}

		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_IS_AVAILABLE_PORT, ex);
		}
		return isValidPort;
	}

	protected boolean isDupInputPubPort(String port, String inputEpName) {
		boolean isvalidInpPort = true;
		try {
			List<WindowsAzureRole> roles = getRoles();
			for (WindowsAzureRole role : roles) {
				List<WindowsAzureEndpoint> eps = role.getEndpoints();
				for (WindowsAzureEndpoint ep : eps) {
					if (ep.getName().equalsIgnoreCase(inputEpName)) {
						// edit case of ep
						continue;
					}
					if (ParserXMLUtility.isEpPortEqualOrInRange(ep.getPort(),
							port)) {
						isvalidInpPort = false;
						break;
					}
				}
			}
		} catch (Exception ex) {
			isvalidInpPort = false;
		}
		return isvalidInpPort;
	}

	public boolean checkForInstanceEp(String port) {
		// Get all instance endpoint and check range
		boolean isvalid = true;
		try {

			XPath xPath = XPathFactory.newInstance().newXPath();
			Document doc = getdefinitionFileDoc();
			String expr = WindowsAzureConstants.INS_FIX_RANGE_EXPR;

			NodeList epList = (NodeList) xPath.evaluate(expr, doc,
					XPathConstants.NODESET);

			for (int i = 0; i < epList.getLength(); i++) {
				Element endPt = (Element) epList.item(i);
				int min = Integer.parseInt(endPt
						.getAttribute(WindowsAzureConstants.ATTR_MINPORT));
				int max = Integer.parseInt(endPt
						.getAttribute(WindowsAzureConstants.ATTR_MAXPORT));
				int newport = Integer.parseInt(port);
				if (newport >= min && newport <= max) {
					isvalid = false;
					break;
				}
			}
		} catch (Exception e) {
			isvalid = false;
		}
		return isvalid;
	}

	/**
	 * Copy resource file to a specified location.
	 * 
	 * @param input
	 *            : the resource file.
	 * @param output
	 *            : the path where the file is to be copied.
	 * @throws IOException
	 */
	private void copyResourceFile(String input, String output)
			throws IOException {
		InputStream urlStream = this.getClass().getResourceAsStream(input);
		OutputStream out = new FileOutputStream(new File(output));
		ParserXMLUtility.writeFile(urlStream, out);
	}

	// Copy SA related files to project directory
	public void copySAResources(String roleName) throws IOException,
			WindowsAzureInvalidProjectOperationException {
		String destPath = String.format("%s%s%s%s%s%s%s%s", projDirPath,
				File.separator, roleName, File.separator,
				WindowsAzureConstants.APPROOT_NAME, File.separator,
				WindowsAzureConstants.SA_FOLDER_NAME, File.separator);

		File file = new File(destPath);
		if (!file.exists()) {
			boolean result = file.mkdirs();

			if (!result) {
				throw new WindowsAzureInvalidProjectOperationException(
						WindowsAzureConstants.DIR_NOT_CREATED + destPath);
			}
		}

		copyResourceFile("/arrconfig/ConfigureARR.cmd", destPath
				+ "ConfigureARR.cmd");
		copyResourceFile("/arrconfig/ARRAgent.exe", destPath + "ARRAgent.exe");
		copyResourceFile("/arrconfig/ARRAgent.exe.config", destPath
				+ "ARRAgent.exe.config");

		/*
		 * Uncomment this code if we need to distribute webpicmd instead of
		 * downloading copyResourceFile(
		 * "/sessionaffinity/Microsoft.Web.PlatformInstaller.UI.dll", destPath +
		 * "Microsoft.Web.PlatformInstaller.UI.dll");
		 * copyResourceFile("/sessionaffinity/WebpiCmdLine.exe", destPath +
		 * "WebpiCmdLine.exe");
		 */
	}

	// Copy SA related files to project directory
	public void removeOldSAResources(String roleName) throws IOException,
			WindowsAzureInvalidProjectOperationException {
		String destPath = String.format("%s%s%s%s%s%s%s%s", projDirPath,
				File.separator, roleName, File.separator,
				WindowsAzureConstants.APPROOT_NAME, File.separator,
				WindowsAzureConstants.OLD_SA_FOLDER_NAME, File.separator);

		File file = new File(destPath);
		if (file.exists()) {
			deleteDir(file);
		}
	}

	/**
	 * This API can be used as a single point of contact to update any project
	 * configuration for SA files. As of now updating sdk version in session
	 * affinity files but in future can be extended
	 * 
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public void performRoleUpdatesForSA()
			throws WindowsAzureInvalidProjectOperationException {
		try {
			// get latest sdk version
			String sdkVersion = getLatestAzureVersionForSA();

			// Iterate through roles and update configuration files as needed
			List<WindowsAzureRole> listRoles = getRoles();
			for (Iterator<WindowsAzureRole> iterator = listRoles.iterator(); iterator
					.hasNext();) {
				WindowsAzureRole windowsAzureRole = iterator.next();
				if (sdkVersion == null) {
					sdkVersion = "2.8.0.0";
				}
				// If Session affinity is enabled
				if (sdkVersion != null
						&& (windowsAzureRole.getSessionAffinityInputEndpoint() != null || windowsAzureRole
								.getSslOffloadingInputEndpoint() != null)) {
					String destPath = String.format("%s%s%s%s%s%s%s%s%s",
							projDirPath, File.separator,
							windowsAzureRole.getName(), File.separator,
							WindowsAzureConstants.APPROOT_NAME, File.separator,
							WindowsAzureConstants.SA_FOLDER_NAME,
							File.separator,
							WindowsAzureConstants.SA_CONFIG_FILE);

					Document saConfigDoc = ParserXMLUtility
							.parseXMLResource(this.getClass()
									.getResourceAsStream(
											"/arrconfig/ARRAgent.exe.config"));
					/*
					 * Temporary fix for Azure SDK 2.8
					 * Microsoft.WindowsAzure.ServiceRuntime.dll version is still 2.7.0.0
					ParserXMLUtility.setExpressionValue(saConfigDoc,
							WindowsAzureConstants.SA_NEW_VERSION_ATTR,
							sdkVersion); */
					ParserXMLUtility.saveXMLFile(destPath, saConfigDoc);
				}
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_ROLE_UPDATES, e);
		}
	}

	/**
	 * Serializes and saves WindowsAzureProjectManager to disk.
	 * 
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public void save() throws WindowsAzureInvalidProjectOperationException {
		try {

			// If not current version and if version is V1.7.0 then update it
			// with V1.8.0
			if (!isCurrVersion()
					&& WindowsAzureConstants.V17_VERSION.equals(getVersion()))
				setVersion(WindowsAzureConstants.VERSION);

			ParserXMLUtility.saveXMLFile(configFilePath, getConfigFileDoc());
			ParserXMLUtility.saveXMLFile(defFilePath, getdefinitionFileDoc());
			ParserXMLUtility.saveXMLFile(packageFilePath, getPackageFileDoc());

			if (mapActivity.containsKey("add")) {
				Vector<String> value = mapActivity.get("add");
				for (String roleName : value) {
					String path = String.format("%s%s%s", projDirPath,
							File.separator, roleName);
					boolean success = new File(path).mkdir();
					if (!success) {
						throw new WindowsAzureInvalidProjectOperationException(
								WindowsAzureConstants.DIR_NOT_CREATED + path);
					}
					success = new File(String.format("%s%s%s%s%s", path,
							File.separator, "approot", File.separator, "util"))
							.mkdirs();
					if (!success) {
						throw new WindowsAzureInvalidProjectOperationException(
								WindowsAzureConstants.DIR_NOT_CREATED + path);
					}
					Vector<String> skpath = mapActivity.get("skPath");
					ZipFile zipFile = new ZipFile(skpath.get(0));
					Enumeration<? extends ZipEntry> entries = zipFile.entries();
					while (entries.hasMoreElements()) {
						ZipEntry entry = (ZipEntry) entries.nextElement();
						if (entry.getName().toLowerCase().indexOf("approot") != -1) {
							if (entry.isDirectory()) {
								String str = entry.getName().replace(
										"%proj%/WorkerRole1", path);
								new File(str).mkdirs();
							} else {
								String outFilename = entry.getName().replace(
										"%proj%/WorkerRole1", path);
								InputStream inStream = zipFile
										.getInputStream(entry);
								OutputStream out = new FileOutputStream(
										new File(outFilename));
								ParserXMLUtility.writeFile(inStream, out);
							}
						}
					}
					zipFile.close();
				}
				mapActivity.remove("add");
			}

			if (mapActivity.containsKey("rename")) {
				Vector<String> value = mapActivity.get("rename");
				boolean success = new File(value.elementAt(0))
						.renameTo(new File(value.elementAt(1)));
				if (!success) {
					throw new WindowsAzureInvalidProjectOperationException(
							"Not able to rename from " + value.elementAt(0)
									+ "to : " + value.elementAt(1));
				}
				mapActivity.remove("rename");
			}

			if (mapActivity.containsKey("delete")) {
				Vector<String> value = mapActivity.get("delete");
				File file = new File(projDirPath + File.separator
						+ value.get(0));
				if (file.exists()) {
					boolean success = deleteDir(file);
					if (!success) {
						throw new WindowsAzureInvalidProjectOperationException(
								WindowsAzureConstants.DIR_NOT_DELETED);
					}
				}
				mapActivity.remove("delete");
			}
			if (mapActivity.containsKey("addProxyFilesForRole")) {
				Vector<String> value = mapActivity.get("addProxyFilesForRole");
				copySAResources(value.get(0));

				mapActivity.remove("addProxyFilesForRole");

			}
			if (mapActivity.containsKey("delProxyFilesForRole")) {
				Vector<String> value = mapActivity.get("delProxyFilesForRole");
				String dirPath = String.format("%s%s%s%s%s%s%s", projDirPath,
						File.separator, value.get(0), File.separator,
						WindowsAzureConstants.APPROOT_NAME, File.separator,
						WindowsAzureConstants.SA_FOLDER_NAME);
				File file = new File(dirPath);
				WindowsAzureProjectManager.deleteDir(file);
				mapActivity.remove("delProxyFilesForRole");
			}

			// Method which updates role configurations
			performRoleUpdatesForSA();
		} catch (Exception ex) {
			ex.printStackTrace();
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_SAVE, ex);
		}
	}

	/**
	 * Gets the service name.
	 * 
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public String getServiceName()
			throws WindowsAzureInvalidProjectOperationException {
		String sName = "";
		try {
			XPath xPath = XPathFactory.newInstance().newXPath();
			if (getdefinitionFileDoc() != null) {
				sName = xPath.evaluate(WindowsAzureConstants.SERVICE_NAME,
						getdefinitionFileDoc());
			}
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_GET_SERVICE_NAME, ex);
		}
		return sName;
	}

	/**
	 * Sets the service name.
	 * 
	 * @param serviceName
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public void setServiceName(String serviceName)
			throws WindowsAzureInvalidProjectOperationException {
		if ((serviceName == null) || serviceName.isEmpty()) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		}
		try {
			if (getdefinitionFileDoc() != null) {
				Node root = getdefinitionFileDoc().getDocumentElement();
				NamedNodeMap nMap = root.getAttributes();
				nMap.getNamedItem("name").setNodeValue(serviceName);
			}
			if (getConfigFileDoc() != null) {
				Node root = getConfigFileDoc().getDocumentElement();
				NamedNodeMap nMap = root.getAttributes();
				nMap.getNamedItem("serviceName").setNodeValue(serviceName);
			}
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_SET_SERVICE_NAME, ex);
		}
	}

	/**
	 * Gets target OS family value.
	 * 
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public OSFamilyType getOSFamily()
			throws WindowsAzureInvalidProjectOperationException {
		try {
			String value = ParserXMLUtility.getExpressionValue(
					getConfigFileDoc(), WindowsAzureConstants.CONFIG_OSFAMILY);
			if (value != null && !value.isEmpty()) {

				for (OSFamilyType osType : OSFamilyType.values()) {
					if (osType.getValue() == Integer.parseInt(value)) {
						return osType;
					}
				}
			}
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_GET_TARGET_OS_NAME);
		} catch (Exception ex) {
			ex.printStackTrace();
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_GET_TARGET_OS_NAME, ex);
		}
	}

	/**
	 * Sets target OS family.
	 * 
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public void setOSFamily(OSFamilyType osFamilyType)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			String osFamily = osFamilyType.getValue() + "";
			ParserXMLUtility.setExpressionValue(getConfigFileDoc(),
					WindowsAzureConstants.CONFIG_OSFAMILY, osFamily);

		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_SET_TARGET_OS_NAME, ex);
		}
	}

	/**
	 * Gets the package type.
	 * 
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public WindowsAzurePackageType getPackageType()
			throws WindowsAzureInvalidProjectOperationException {
		try {
			XPath xPath = XPathFactory.newInstance().newXPath();
			String expr = WindowsAzureConstants.PROJECT_TYPE;
			Document doc = packageFileDoc;
			String packageType = xPath.evaluate(expr, doc);
			return WindowsAzurePackageType.valueOf(packageType
					.toUpperCase(Locale.getDefault()));
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_GET_PACKAGE_TYPE, ex);
		}
	}

	/**
	 * Sets the package type.
	 * 
	 * @param packageType
	 *            .
	 * @throws WindowsAzureInvalidProjectOperationException .
	 */
	public void setPackageType(WindowsAzurePackageType packageType)
			throws WindowsAzureInvalidProjectOperationException {
		if (packageType == null) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		}
		WindowsAzurePackageType prevType = getWindowsAzureProjMgr()
				.getPackageType();
		try {
			HashMap<String, String> InstanceMap = new HashMap<String, String>();
			List<WindowsAzureRole> roles = getRoles();
			for (WindowsAzureRole role : roles) {
				InstanceMap.put(role.getName(), role.getInstances());
			}
			XPath xPath = XPathFactory.newInstance().newXPath();
			Node node = (Node) xPath.evaluate(
					WindowsAzureConstants.PROJECT_TYPE, packageFileDoc,
					XPathConstants.NODE);
			node.setNodeValue(packageType.name().toLowerCase());

			// iterate on each role and call setCacheSettingInCscfg and
			// setInstance
			for (WindowsAzureRole role : roles) {
				role.setCacheSettingInCscfg(role.getCacheStorageAccountName(),
						role.getCacheStorageAccountKey(),
						role.getCacheStorageAccountUrl());
				role.setInstances(InstanceMap.get(role.getName()));
				// check the current package type is not equal
				// to the one which are setting
				if (!prevType.equals(packageType)) {
					// create JAVA_HOME settings
					doJavaHomeSettings(packageType, role);
					doServerHomeSettings(packageType, role);
				}
			}
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_SET_PACKAGE_TYPE, ex);
		}
	}

	/**
	 * Method checks package type and accordingly does JAVA_HOME settings.
	 * 
	 * @param packageType
	 * @param role
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	private void doJavaHomeSettings(WindowsAzurePackageType packageType,
			WindowsAzureRole role)
			throws WindowsAzureInvalidProjectOperationException {
		String jdkPath = role.getJDKSourcePath();
		if (jdkPath != null) {
			String jdkUrl = role.getJDKCloudURL();
			if (jdkUrl != null && !jdkUrl.isEmpty()) {
				if (packageType.equals(WindowsAzurePackageType.LOCAL)) {
					String javaLocal = role.getJDKLocalHome();
					role.setJDKCloudHome(role
							.getRuntimeEnv(WindowsAzureConstants.JAVA_HOME_ENV_VAR));
					role.setRuntimeEnv(WindowsAzureConstants.JAVA_HOME_ENV_VAR,
							javaLocal);
					role.setJDKLocalHome("");
				} else {
					// package type Cloud
					String javaCloud = role.getJDKCloudHome();
					role.setJDKLocalHome(role
							.getRuntimeEnv(WindowsAzureConstants.JAVA_HOME_ENV_VAR));
					role.setRuntimeEnv(WindowsAzureConstants.JAVA_HOME_ENV_VAR,
							javaCloud);
					role.setJDKCloudHome("");
				}
			}
		}
	}

	/**
	 * Method checks package type and accordingly does SERVER_HOME settings.
	 * 
	 * @param packageType
	 * @param role
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	private void doServerHomeSettings(WindowsAzurePackageType packageType,
			WindowsAzureRole role)
			throws WindowsAzureInvalidProjectOperationException {
		String srvPath = role.getServerSourcePath();
		String srvName = role.getServerName();
		if (srvPath != null && srvName != null
				&& !srvName.isEmpty()) {
			String srvUrl = role.getServerCloudURL();
			if (srvUrl != null && !srvUrl.isEmpty()) {
				String srvEnvName = role.getRuntimeEnvName("server.home");
				if (packageType.equals(WindowsAzurePackageType.LOCAL)) {
					String srvLocal = role.getServerLocalHome();
					role.setServerCloudHome(role.getRuntimeEnv(srvEnvName));
					role.setRuntimeEnv(srvEnvName, srvLocal);
					role.setServerLocalHome("");
				} else {
					// package type Cloud
					String srvCloud = role.getServerCloudHome();
					role.setServerLocalHome(role.getRuntimeEnv(srvEnvName));
					role.setRuntimeEnv(srvEnvName, srvCloud);
					role.setServerCloudHome("");
				}
			}
		}
	}

	/**
	 * Gets the portal URL.
	 * 
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public String getPortalURL()
			throws WindowsAzureInvalidProjectOperationException {
		try {
			XPath xPath = XPathFactory.newInstance().newXPath();
			String expr = WindowsAzureConstants.PORTAL_URL;
			Document doc = packageFileDoc;
			String portalURL = xPath.evaluate(expr, doc);
			return portalURL;
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_GET_PORTAL_URL, ex);
		}
	}

	/**
	 * Sets the portal URL. If URL is null then remove the attribute.
	 * 
	 * @param url
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public void setPortalURL(String url)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			XPath xPath = XPathFactory.newInstance().newXPath();
			Element element = (Element) xPath.evaluate(
					WindowsAzureConstants.WINAZURE_PACKAGE, packageFileDoc,
					XPathConstants.NODE);
			if ((url == null || url.isEmpty())
					&& element
							.hasAttribute(WindowsAzureConstants.ATTR_PORTALURL)) {
				element.removeAttribute(WindowsAzureConstants.ATTR_PORTALURL);
			} else {
				element.setAttribute(WindowsAzureConstants.ATTR_PORTALURL, url);
			}
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_SET_PORTAL_URL, ex);
		}
	}

	/**
	 * Gets the list of roles that are associated with this instance of
	 * WindowsAzureProjectManager.
	 * 
	 * @return The list of roles.
	 * @throws WindowsAzureInvalidProjectOperationException .
	 */
	public List<WindowsAzureRole> getRoles()
			throws WindowsAzureInvalidProjectOperationException {
		try {
			if (roleList.isEmpty()) {
				XPath xPath = XPathFactory.newInstance().newXPath();
				NodeList nodeList = (NodeList) xPath.evaluate(
						WindowsAzureConstants.WORKER_ROLE,
						getdefinitionFileDoc(), XPathConstants.NODESET);
				for (int i = 0; i < nodeList.getLength(); i++) {
					Element workerRole = (Element) nodeList.item(i);
					WindowsAzureRole winAzureRole = new WindowsAzureRole(this);
					String roleName = workerRole.getAttribute("name");
					if (roleName.isEmpty()) {
						throw new WindowsAzureInvalidProjectOperationException(
								WindowsAzureConstants.BLANK_RNAME);
					}
					winAzureRole.setName(workerRole.getAttribute("name"));
					String vmSize = "";
					vmSize = workerRole.getAttribute("vmsize");
					if (vmSize.isEmpty()) {
						vmSize = "Small";
					}
					winAzureRole.setVMSize(vmSize);
					winAzureRole.setEndpoints(winAzureRole.getEndpoints());
					winAzureRole.getComponents();
					roleList.add(winAzureRole);
				}
			}
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_GET_ROLE, ex);
		}
		return roleList;
	}

	/**
	 * Adds a new role to this instance of WindowsAzureProjectManager.
	 * 
	 * @param roleName
	 * @return A new instance of WindowsAzureRole.
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public WindowsAzureRole addRole(String roleName, String strPath)
			throws WindowsAzureInvalidProjectOperationException {

		if ((roleName == null) || (roleName.isEmpty())) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		}
		try {
			String username = "";
			String password = "";
			Date expirydate = null;
			String fingerprint = "";
			boolean isRAccess = getRemoteAccessAllRoles();
			if (isRAccess) {
				username = getRemoteAccessUsername();
				password = getRemoteAccessEncryptedPassword();
				expirydate = getRemoteAccessAccountExpiration();
				fingerprint = getRemoteAccessCertificateFingerprint();
			}
			WindowsAzureRole newWinAzureRole = new WindowsAzureRole(this);
			// Add in definition File
			Document doc = getdefinitionFileDoc();
			Element eleRole = doc.createElement("WorkerRole");
			eleRole.setAttribute("name", roleName);
			eleRole.setAttribute("vmsize", "");
			eleRole.setAttribute("enableNativeCodeExecution", "true");
			Element root = doc.getDocumentElement();
			root.appendChild(eleRole);

			// Add startup tag:
			Element eleStartup = doc
					.createElement(WindowsAzureConstants.DEF_FILE_STARTUP_ELEMENT_NAME);
			eleRole.appendChild(eleStartup);

			// Add task
			Comment sampleTask = doc
					.createComment(WindowsAzureConstants.SAMPLE_TASK_COMMENT);
			eleStartup.appendChild(sampleTask);
			Element eleTask = doc
					.createElement(WindowsAzureConstants.DEF_FILE_TASK_ELEMENT_NAME);
			eleTask.setAttribute(WindowsAzureConstants.ATTR_CMD_LINE,
					WindowsAzureConstants.TASK_CMD_LINE);
			eleTask.setAttribute(WindowsAzureConstants.ATTR_EXE_CONTEXT,
					"elevated");
			eleTask.setAttribute(WindowsAzureConstants.ATTR_TASK_TYPE, "simple");
			eleStartup.appendChild(eleTask);

			// add <RunTime> tag
			Element eleRunTime = doc.createElement("Runtime");
			eleRunTime.setAttribute("executionContext", "elevated");
			Element eleEntryPt = doc.createElement("EntryPoint");
			Comment sampleEntryPt = doc
					.createComment(WindowsAzureConstants.SAMPLE_ENTRY_PT_COMMENT);
			Element elePrpgEpt = doc.createElement("ProgramEntryPoint");
			elePrpgEpt.setAttribute("commandLine", "run.cmd");
			elePrpgEpt.setAttribute("setReadyOnProcessStart", "true");
			eleRunTime.appendChild(eleEntryPt);
			eleEntryPt.appendChild(sampleEntryPt);
			eleEntryPt.appendChild(elePrpgEpt);
			eleRole.appendChild(eleRunTime);

			if (isRAccess) {
				Element eleImports = doc.createElement("Imports");
				Element eleAccess = doc.createElement("Import");
				eleAccess.setAttribute("moduleName", "RemoteAccess");
				eleImports.appendChild(eleAccess);
				eleRole.appendChild(eleImports);
			}
			Element eleEndpoints = doc.createElement("Endpoints");
			eleRole.appendChild(eleEndpoints);

			newWinAzureRole.setName(roleName);
			roleList.add(newWinAzureRole);

			// Add in Config file

			doc = getConfigFileDoc();
			eleRole = doc.createElement("Role");
			eleRole.setAttribute("name", roleName);
			Element instances = doc.createElement("Instances");
			instances.setAttribute("count", "");
			eleRole.appendChild(instances);
			doc.getDocumentElement().appendChild(eleRole);

			if (isRAccess) {
				Element configSettings = doc
						.createElement("ConfigurationSettings");
				Element eleSettingEnabled = doc.createElement("Setting");
				eleSettingEnabled.setAttribute("name",
						WindowsAzureConstants.REMOTEACCESS_ENABLED);
				eleSettingEnabled.setAttribute("value", "true");
				configSettings.appendChild(eleSettingEnabled);
				eleRole.appendChild(configSettings);
				Element certificates = doc.createElement("Certificates");
				eleRole.appendChild(certificates);
				newWinAzureRole.setAccUsername(username);
				newWinAzureRole.setAccPassword(password);
				DateFormat formatter = new SimpleDateFormat(
						WindowsAzureConstants.DATE_FORMAT, Locale.getDefault());
				String dateStr = formatter.format(expirydate);
				newWinAzureRole.setAccExpiryDate(dateStr);
				newWinAzureRole.setThumbprint(fingerprint);
			}

			// Add entry in package.xml
			addRoleInPackageXml(roleName);

			Vector<String> values;
			if (null == (values = mapActivity.get("add"))) {
				values = new Vector<String>();
				mapActivity.put("add", values);
			}
			values.add(roleName);
			Vector<String> skPath = new Vector<String>();
			skPath.add(strPath);
			mapActivity.put("skPath", skPath);

			return newWinAzureRole;
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_ADD_ROLE, ex);
		}
	}

	public void addRoleInPackageXml(String roleName)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			XPath xPath = XPathFactory.newInstance().newXPath();
			Document doc = getPackageFileDoc();
			Element eleRole = doc.createElement("workerrole");
			eleRole.setAttribute("approotdir", String.format("%s%s%s",
					"${basedir}\\", roleName, "\\approot"));
			eleRole.setAttribute("name", roleName);
			Node node = (Node) xPath.evaluate(
					WindowsAzureConstants.WINAZURE_PACKAGE, doc,
					XPathConstants.NODE);
			node.appendChild(eleRole);
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while adding role in Package.xml", ex);
		}

	}

	/**
	 * Returns the WindowsAzureRole object corresponding to the role pointed at
	 * by path parameter or null if the folder pointed by path is not a role
	 * folder.
	 * 
	 * @param path
	 * @return WindowsAzureRole object
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public WindowsAzureRole roleFromPath(File path)
			throws WindowsAzureInvalidProjectOperationException {
		if (path == null) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		}
		WindowsAzureRole role = null;
		try {
			XPath xPath = XPathFactory.newInstance().newXPath();
			Document doc = getPackageFileDoc();
			String expr = String.format(WindowsAzureConstants.WA_PACK_NAME,
					path.getName());
			Node nodeRole = (Node) xPath.evaluate(expr, doc,
					XPathConstants.NODE);
			if (nodeRole != null) {
				List<WindowsAzureRole> listRoles = getRoles();
				for (Iterator<WindowsAzureRole> iterator = listRoles.iterator(); iterator
						.hasNext();) {
					WindowsAzureRole windowsAzureRole = iterator.next();
					if (windowsAzureRole.getName().equalsIgnoreCase(
							path.getName())) {
						role = windowsAzureRole;
						break;
					}
				}
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_ROLE_FROM_PATH, e);
		}
		return role;
	}

	/**
	 * This method enables/disables the Remote access support.
	 * 
	 * @param value
	 *            : if true enables Remote access else disables it.
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public void setRemoteAccessAllRoles(Boolean value)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			if (value) {
				// Create entries in configuration (cscfg) file
				XPath xPath = XPathFactory.newInstance().newXPath();
				Document doc = getConfigFileDoc();
				NodeList listRoles = (NodeList) xPath
						.evaluate(WindowsAzureConstants.ROLE, doc,
								XPathConstants.NODESET);
				for (int i = 0; i < listRoles.getLength(); i++) {
					Element element = (Element) listRoles.item(i);
					String expr = String.format(
							WindowsAzureConstants.CONFIG_ROLE_SET,
							element.getAttribute("name"));
					Element eleConfigSettings = (Element) xPath.evaluate(expr,
							doc, XPathConstants.NODE);
					if (eleConfigSettings == null) {
						eleConfigSettings = doc
								.createElement("ConfigurationSettings");
						element.appendChild(eleConfigSettings);
					}

					createRAEnableSetting(xPath, doc, eleConfigSettings,
							element);
					expr = String.format(WindowsAzureConstants.CERT_ROLE,
							element.getAttribute("name"));
					Element eleCertificates = (Element) xPath.evaluate(expr,
							doc, XPathConstants.NODE);
					if (eleCertificates == null) {
						eleCertificates = doc.createElement("Certificates");
						element.appendChild(eleCertificates);
					}
				}
				// Create entries in definition (csdef) file
				createEntriesForDefFile();

				// Check for RemoteForwarder Setting and Import, if not present
				// add it to the first role
				addRemoteForwarder();

				// Create entries in package.xml
				doc = getPackageFileDoc();
				xPath = XPathFactory.newInstance().newXPath();
				String expr = WindowsAzureConstants.PROJ_PROPERTY;
				Element eleProjProperty = (Element) xPath.evaluate(expr, doc,
						XPathConstants.NODE);
				// If waprojectproperties target not present
				if (eleProjProperty == null) {
					Element eleProj = doc.createElement("target");
					eleProj.setAttribute("description",
							WindowsAzureConstants.PROJ_PROPERTY_DESC);
					eleProj.setAttribute("name", "waprojectproperties");
					Element eleProperty = doc.createElement("property");
					eleProperty.setAttribute("name",
							"project.enableremoteaccess");
					eleProperty.setAttribute("value", "true");
					eleProj.appendChild(eleProperty);

					expr = "/project";
					Element root = (Element) xPath.evaluate(expr, doc,
							XPathConstants.NODE);
					expr = WindowsAzureConstants.CREATE_PKG_TARGET;
					Element eleTarget = (Element) xPath.evaluate(expr, doc,
							XPathConstants.NODE);
					root.insertBefore(eleProj, eleTarget);
				} else {
					xPath = XPathFactory.newInstance().newXPath();
					expr = WindowsAzureConstants.PROJ_REMOTE_ACCESS;
					Element eleRemoteAccess = (Element) xPath.evaluate(expr,
							doc, XPathConstants.NODE);
					if (eleRemoteAccess == null) {
						eleRemoteAccess = doc.createElement("property");
						eleRemoteAccess.setAttribute("name",
								"project.enableremoteaccess");
						eleRemoteAccess.setAttribute("value", "true");
						eleProjProperty.appendChild(eleRemoteAccess);
					} else {
						eleRemoteAccess.setAttribute("value", "true");
					}
				}

			} else {
				// Remove entries from configuration (cscfg) file
				removeEntriesFromConfigFile(WindowsAzureConstants.REMOTEACCESS_ENABLED);
				removeEntriesFromConfigFile(WindowsAzureConstants.REMOTEACCESS_USERNAME);
				removeEntriesFromConfigFile(WindowsAzureConstants.REMOTEACCESS_PASSWORD);
				removeEntriesFromConfigFile(WindowsAzureConstants.REMOTEACCESS_EXPIRY);
				removeEntriesFromConfigFile(WindowsAzureConstants.REMOTEFORWARDER_ENABLED);
				removeCertificatesFromConfigFile();

				// Remove entries from package file
				XPath xPath = XPathFactory.newInstance().newXPath();
				String expr = WindowsAzureConstants.PROJ_REMOTE_ACCESS;
				Document doc = getPackageFileDoc();
				Element element = (Element) xPath.evaluate(expr, doc,
						XPathConstants.NODE);
				if (element != null) {
					element.getParentNode().removeChild(element);
				}
				xPath = XPathFactory.newInstance().newXPath();
				expr = WindowsAzureConstants.PROJ_REMOTE_DESKTOP;
				element = (Element) xPath.evaluate(expr, doc,
						XPathConstants.NODE);
				if (element != null) {
					element.getParentNode().removeChild(element);
				}
				// Remove entries from definition (csdef) file
				doc = getdefinitionFileDoc();
				xPath = XPathFactory.newInstance().newXPath();
				expr = WindowsAzureConstants.PROJ_IMPORT_ACCESS;
				NodeList listImport = (NodeList) xPath.evaluate(expr, doc,
						XPathConstants.NODESET);
				for (int i = 0; i < listImport.getLength(); i++) {
					element = (Element) listImport.item(i);
					element.getParentNode().removeChild(element);
				}
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_RA_ALLUSER, e);
		}
	}

	/**
	 * Creates entries in definition file to enable remote access.
	 * 
	 * @throws WindowsAzureInvalidProjectOperationException
	 * @throws XPathExpressionException
	 */
	private void createEntriesForDefFile()
			throws WindowsAzureInvalidProjectOperationException,
			XPathExpressionException {
		Document doc = getdefinitionFileDoc();
		XPath xPath = XPathFactory.newInstance().newXPath();
		String expr = WindowsAzureConstants.WORKER_ROLE;
		NodeList listWorkerRoles = (NodeList) xPath.evaluate(expr, doc,
				XPathConstants.NODESET);
		for (int i = 0; i < listWorkerRoles.getLength(); i++) {
			Element element = (Element) listWorkerRoles.item(i);

			expr = String.format(WindowsAzureConstants.IMPORT,
					element.getAttribute("name"));
			Element eleImports = (Element) xPath.evaluate(expr, doc,
					XPathConstants.NODE);
			if (eleImports == null) {
				eleImports = doc.createElement("Imports");
				element.appendChild(eleImports);
			}
			expr = String.format(WindowsAzureConstants.IMPORT_MNANE,
					element.getAttribute("name"));
			Element eleAccess = (Element) xPath.evaluate(expr, doc,
					XPathConstants.NODE);
			if (eleAccess == null) {
				eleAccess = doc.createElement("Import");
				eleAccess.setAttribute("moduleName", "RemoteAccess");
				eleImports.appendChild(eleAccess);
			}
		}
	}

	/**
	 * Removes Certificates node from configuration file when remote access is
	 * disabled.
	 * 
	 * @throws XPathExpressionException
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	private void removeCertificatesFromConfigFile()
			throws XPathExpressionException,
			WindowsAzureInvalidProjectOperationException {
		// Remove from cscfg
		Document doc = getConfigFileDoc();
		XPath xPath = XPathFactory.newInstance().newXPath();
		String expr = WindowsAzureConstants.FPRINT_ALL;
		NodeList listCertificates = (NodeList) xPath.evaluate(expr, doc,
				XPathConstants.NODESET);
		for (int i = 0; i < listCertificates.getLength(); i++) {
			Element ele = (Element) listCertificates.item(i);
			ele.getParentNode().removeChild(ele);
		}
		List<WindowsAzureRole> listRoles = getRoles();
		for (Iterator<WindowsAzureRole> iterator = listRoles.iterator(); iterator
				.hasNext();) {
			WindowsAzureRole windowsAzureRole = iterator.next();
			/*
			 * When we disable remote access from wizard, need to initialize
			 * certificate map
			 */
			windowsAzureRole.getCertificates();
			windowsAzureRole.certMap
					.remove(WindowsAzureConstants.REMOTEACCESS_FINGERPRINT);
		}
	}

	public boolean isRemoteAccessTryingToUseSSLCert(String thumbPrint)
			throws WindowsAzureInvalidProjectOperationException {
		boolean isTryingToUse = false;
		List<WindowsAzureRole> listRoles = getRoles();
		for (Iterator<WindowsAzureRole> iterator = listRoles.iterator(); iterator
				.hasNext();) {
			WindowsAzureRole windowsAzureRole = iterator.next();
			WindowsAzureCertificate cert = windowsAzureRole
					.getSslOffloadingCert();
			if (windowsAzureRole.getSslOffloadingInputEndpoint() != null
					&& cert != null
					&& cert.getFingerPrint().equalsIgnoreCase(thumbPrint)) {
				isTryingToUse = true;
				break;
			}
		}
		return isTryingToUse;
	}

	/**
	 * Creates setting node in configuration file to set enable remote access
	 * property to true.
	 * 
	 * @param xPath
	 * @param doc
	 * @param eleConfigSettings
	 * @param element
	 * @throws XPathExpressionException
	 */
	private void createRAEnableSetting(XPath xPath, Document doc,
			Element eleConfigSettings, Element element)
			throws XPathExpressionException {
		String expr = String.format(WindowsAzureConstants.RA_ROLE_ENABLED,
				element.getAttribute("name"));
		Element eleSettingEnabled = (Element) xPath.evaluate(expr, doc,
				XPathConstants.NODE);
		if (eleSettingEnabled == null) {
			eleSettingEnabled = doc.createElement("Setting");
			eleSettingEnabled.setAttribute("name",
					WindowsAzureConstants.REMOTEACCESS_ENABLED);
			eleSettingEnabled.setAttribute("value", "true");
			eleConfigSettings.appendChild(eleSettingEnabled);
		} else {
			eleSettingEnabled.setAttribute("value", "true");
		}
	}

	/**
	 * Creates remote forwarder setting node in configuration file.
	 * 
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	protected void addRemoteForwarder()
			throws WindowsAzureInvalidProjectOperationException {
		try {
			XPath xPath = XPathFactory.newInstance().newXPath();
			Document doc = getConfigFileDoc();
			String expr = WindowsAzureConstants.RF_ENABLED;
			Element eleRemForwarder = (Element) xPath.evaluate(expr, doc,
					XPathConstants.NODE);
			if (eleRemForwarder == null) {
				eleRemForwarder = doc.createElement("Setting");
				eleRemForwarder.setAttribute("name",
						WindowsAzureConstants.REMOTEFORWARDER_ENABLED);
				eleRemForwarder.setAttribute("value", "true");

				Element parent = (Element) xPath.evaluate(
						WindowsAzureConstants.ROLE
								+ "[1]/ConfigurationSettings", doc,
						XPathConstants.NODE);
				parent.appendChild(eleRemForwarder);
			} else {
				eleRemForwarder.setAttribute("value", "true");
			}

			expr = WindowsAzureConstants.WORKER_ROLE
					+ "/Imports/Import[@moduleName='RemoteForwarder']";
			doc = getdefinitionFileDoc();
			Element eleForwarder = (Element) xPath.evaluate(expr, doc,
					XPathConstants.NODE);
			if (eleForwarder == null) {
				eleForwarder = doc.createElement("Import");
				eleForwarder.setAttribute("moduleName", "RemoteForwarder");
				expr = WindowsAzureConstants.WORKER_ROLE + "[1]/Imports";
				Element eleImports = (Element) xPath.evaluate(expr, doc,
						XPathConstants.NODE);
				eleImports.appendChild(eleForwarder);
			}
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP, ex);
		}
	}

	/**
	 * Removes entries from configuration file to disable the remote access.
	 * 
	 * @param setting
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	private void removeEntriesFromConfigFile(String setting)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			Document doc = getConfigFileDoc();
			XPath xPath = XPathFactory.newInstance().newXPath();
			String expr = String.format("%s%s%s%s",
					WindowsAzureConstants.CONFIG_SETTING, "[@name='", setting,
					"']");
			NodeList listSetting = (NodeList) xPath.evaluate(expr, doc,
					XPathConstants.NODESET);
			for (int i = 0; i < listSetting.getLength(); i++) {
				Element ele = (Element) listSetting.item(i);
				ele.getParentNode().removeChild(ele);
			}
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP, ex);
		}
	}

	/**
	 * Returns whether Remote access support is enabled/disabled.
	 * 
	 * @return true if Remote access is enabled else false.
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public Boolean getRemoteAccessAllRoles()
			throws WindowsAzureInvalidProjectOperationException {
		Boolean isRemoteAccess = false;
		try {
			XPath xPath = XPathFactory.newInstance().newXPath();
			String expr = WindowsAzureConstants.PROJ_REMOTE_ACCESS + "/@value";
			Document doc = packageFileDoc;
			String remAccStatus = xPath.evaluate(expr, doc);
			if (remAccStatus.equalsIgnoreCase("true")) {
				isRemoteAccess = true;
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_RA_GET_ALLUSER, e);
		}
		return isRemoteAccess;
	}

	/**
	 * Returns the user name for Remote access configuration.
	 * 
	 * @return remoteAccessUsername username for Remote access
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public String getRemoteAccessUsername()
			throws WindowsAzureInvalidProjectOperationException {
		try {
			XPath xPath = XPathFactory.newInstance().newXPath();
			Document doc = getConfigFileDoc();
			String attrName = WindowsAzureConstants.REMOTEACCESS_USERNAME;
			String expr = String.format("%s%s%s%s",
					WindowsAzureConstants.CONFIG_SETTING, "[@name='", attrName,
					"']");
			NodeList listUsername = (NodeList) xPath.evaluate(expr, doc,
					XPathConstants.NODESET);
			List<WindowsAzureRole> listRoles = getRoles();
			List<String> listValue = new ArrayList<String>();
			for (Iterator<WindowsAzureRole> iterator = listRoles.iterator(); iterator
					.hasNext();) {
				WindowsAzureRole windowsAzureRole = iterator.next();
				listValue.add(windowsAzureRole.getAccUsername());
			}
			int numAttr = listUsername.getLength();
			String remAccUsername = checkValidAttribute(numAttr, attrName,
					listValue);
			return remAccUsername;
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_RA_GET_UNAME, e);
		}
	}

	/**
	 * Checks if the specified attribute of ConfigurationSettings is same for
	 * each role.
	 * 
	 * @param numValues
	 * @param attrName
	 * @param listValue
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	private String checkValidAttribute(int numValues, String attrName,
			List<String> listValue)
			throws WindowsAzureInvalidProjectOperationException {
		String attrVal = "";
		try {
			if (numValues != 0) {
				XPath xPath = XPathFactory.newInstance().newXPath();
				Document doc = getConfigFileDoc();
				int noOfRoles = ((NodeList) xPath
						.evaluate(WindowsAzureConstants.ROLE, doc,
								XPathConstants.NODESET)).getLength();
				// Check if the attribute is present for each role
				if (noOfRoles == numValues) {
					String expr = String.format("%s%s%s%s",
							WindowsAzureConstants.CONFIG_SETTING, "[@name='",
							attrName, "']/@value");
					attrVal = xPath.evaluate(expr, doc);
					// Check if the attribute is having same value for each role
					for (int i = 0; i < listValue.size(); i++) {
						String value = listValue.get(i);
						if (!attrVal.equals(value)) {
							throw new WindowsAzureInvalidProjectOperationException();
						}
					}
				} else {
					throw new WindowsAzureInvalidProjectOperationException();
				}
			}
			return attrVal;
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException("Exception",
					ex);
		}
	}

	/**
	 * Sets the user name for Remote access configuration.
	 * 
	 * @param name
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public void setRemoteAccessUsername(String name)
			throws WindowsAzureInvalidProjectOperationException {
		if (name == null || name.isEmpty()) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		}
		try {
			List<WindowsAzureRole> listRoles = getRoles();
			for (Iterator<WindowsAzureRole> iterator = listRoles.iterator(); iterator
					.hasNext();) {
				WindowsAzureRole windowsAzureRole = iterator.next();
				windowsAzureRole.setAccUsername(name);
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_RA_USER_NAME, e);
		}
	}

	/**
	 * Returns the encrypted password for Remote access configuration.
	 * 
	 * @return remoteAccessEncrypPwd
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public String getRemoteAccessEncryptedPassword()
			throws WindowsAzureInvalidProjectOperationException {
		try {
			XPath xPath = XPathFactory.newInstance().newXPath();
			Document doc = getConfigFileDoc();
			String attrName = WindowsAzureConstants.REMOTEACCESS_PASSWORD;
			String expr = String.format("%s%s%s%s",
					WindowsAzureConstants.CONFIG_SETTING, "[@name='", attrName,
					"']");
			NodeList listEncrypPwd = (NodeList) xPath.evaluate(expr, doc,
					XPathConstants.NODESET);
			int numAttr = listEncrypPwd.getLength();
			List<WindowsAzureRole> listRoles = getRoles();
			List<String> listValue = new ArrayList<String>();
			for (Iterator<WindowsAzureRole> iterator = listRoles.iterator(); iterator
					.hasNext();) {
				WindowsAzureRole windowsAzureRole = iterator.next();
				listValue.add(windowsAzureRole.getAccPassword());
			}
			String remAccEncrypPwd = checkValidAttribute(numAttr, attrName,
					listValue);
			return remAccEncrypPwd;
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_RA_GET_ENC_PWD, e);
		}
	}

	/**
	 * Sets the encrypted password for Remote access configuration.
	 * 
	 * @param password
	 *            the password to be set
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public void setRemoteAccessEncryptedPassword(String password)
			throws WindowsAzureInvalidProjectOperationException {
		if (password == null) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		}
		try {
			List<WindowsAzureRole> listRoles = getRoles();
			for (Iterator<WindowsAzureRole> iterator = listRoles.iterator(); iterator
					.hasNext();) {
				WindowsAzureRole windowsAzureRole = iterator.next();
				windowsAzureRole.setAccPassword(password);
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_RA_ENC_PWD, e);
		}
	}

	/**
	 * Returns the expiration date for remote access account.
	 * 
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public Date getRemoteAccessAccountExpiration()
			throws WindowsAzureInvalidProjectOperationException {
		try {
			XPath xPath = XPathFactory.newInstance().newXPath();
			Document doc = getConfigFileDoc();
			String attrName = WindowsAzureConstants.REMOTEACCESS_EXPIRY;
			String expr = String.format("%s%s%s%s",
					WindowsAzureConstants.CONFIG_SETTING, "[@name='", attrName,
					"']");
			NodeList listAccExpiration = (NodeList) xPath.evaluate(expr, doc,
					XPathConstants.NODESET);
			int numAttr = listAccExpiration.getLength();
			List<WindowsAzureRole> listRoles = getRoles();
			List<String> listValue = new ArrayList<String>();
			for (Iterator<WindowsAzureRole> iterator = listRoles.iterator(); iterator
					.hasNext();) {
				WindowsAzureRole windowsAzureRole = iterator.next();
				listValue.add(windowsAzureRole.getAccExpiryDate());
			}
			String remeAccessAccExp = checkValidAttribute(numAttr, attrName,
					listValue);
			Date date = null;
			if (!remeAccessAccExp.isEmpty()) {
				DateFormat formatter = new SimpleDateFormat(
						WindowsAzureConstants.DATE_FORMAT, Locale.getDefault());
				date = formatter.parse(remeAccessAccExp);
			}
			return date;
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_RA_GET_EXPIRY, e);
		}
	}

	/**
	 * Sets the expiration date for remote access account.
	 * 
	 * @param date
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public void setRemoteAccessAccountExpiration(Date date)
			throws WindowsAzureInvalidProjectOperationException {
		if (date == null) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		}
		try {
			DateFormat formatter = new SimpleDateFormat(
					WindowsAzureConstants.DATE_FORMAT, Locale.getDefault());
			String dateStr = formatter.format(date);
			List<WindowsAzureRole> listRoles = getRoles();
			for (Iterator<WindowsAzureRole> iterator = listRoles.iterator(); iterator
					.hasNext();) {
				WindowsAzureRole windowsAzureRole = iterator.next();
				windowsAzureRole.setAccExpiryDate(dateStr);
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_RA_EXPIRY, e);
		}
	}

	/**
	 * Returns the location of the certificate file for Remote access password
	 * signing and thumbprint generation.
	 * 
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public String getRemoteAccessCertificatePath()
			throws WindowsAzureInvalidProjectOperationException {
		try {
			XPath xPath = XPathFactory.newInstance().newXPath();
			String expr = WindowsAzureConstants.PROJ_REMOTE_DESKTOP + "/@value";
			Document doc = packageFileDoc;
			return xPath.evaluate(expr, doc);

		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_RA_CERT, e);
		}
	}

	/**
	 * Sets the location of the certificate file for Remote access password
	 * signing and thumbprint generation.
	 * 
	 * @param path
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public void setRemoteAccessCertificatePath(String path)
			throws WindowsAzureInvalidProjectOperationException {
		if (path == null || path.isEmpty()) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		}
		try {
			Document doc = getPackageFileDoc();
			XPath xPath = XPathFactory.newInstance().newXPath();
			String expr = WindowsAzureConstants.PROJ_PROPERTY;
			Element eleProjProperty = (Element) xPath.evaluate(expr, doc,
					XPathConstants.NODE);

			xPath = XPathFactory.newInstance().newXPath();
			expr = WindowsAzureConstants.PROJ_REMOTE_DESKTOP;
			Element eleCerPath = (Element) xPath.evaluate(expr, doc,
					XPathConstants.NODE);
			if (eleCerPath == null) {
				eleCerPath = doc.createElement("property");
				eleCerPath.setAttribute("name",
						"cert.windowsazureremotedesktop");
				eleCerPath.setAttribute("value", path);
				eleProjProperty.appendChild(eleCerPath);
			} else {
				eleCerPath.setAttribute("value", path);
			}
			// Delete the comment corresponding to default .cer
			xPath = XPathFactory.newInstance().newXPath();
			expr = String.format("%s%s%s%s%s",
					WindowsAzureConstants.PROJ_PROPERTY, "/comment()",
					"[contains(.,'", WindowsAzureConstants.THUMBPRINT_NOTE,
					"')]");
			Node node = (Node) xPath.evaluate(expr, doc, XPathConstants.NODE);
			if (node != null) {
				node.getParentNode().removeChild(node);
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_RA_SET_CERT, e);
		}
	}

	/**
	 * Returns the fingerprint of the certificate.
	 * 
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public String getRemoteAccessCertificateFingerprint()
			throws WindowsAzureInvalidProjectOperationException {
		try {
			XPath xPath = XPathFactory.newInstance().newXPath();
			Document doc = getConfigFileDoc();
			String attrName = WindowsAzureConstants.REMOTEACCESS_FINGERPRINT;
			String expr = String.format("%s%s%s%s",
					WindowsAzureConstants.CERTIFICATE, "[@name='", attrName,
					"']");
			NodeList listFingerprint = (NodeList) xPath.evaluate(expr, doc,
					XPathConstants.NODESET);
			int numAttr = listFingerprint.getLength();
			List<WindowsAzureRole> listRoles = getRoles();
			List<String> listValue = new ArrayList<String>();
			for (Iterator<WindowsAzureRole> iterator = listRoles.iterator(); iterator
					.hasNext();) {
				WindowsAzureRole windowsAzureRole = iterator.next();
				listValue.add(windowsAzureRole.getThumbprint());
			}
			String remAccFingerprint = checkValidCerAttribute(numAttr,
					attrName, listValue);
			return remAccFingerprint;
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_RA_GET_FPRINT, e);
		}
	}

	/**
	 * Check if the Certificate element is present for each role and is having
	 * same value for each role.
	 * 
	 * @param numAttr
	 * @param attrName
	 * @param listValue
	 * @return
	 * @throws Exception
	 */
	private String checkValidCerAttribute(int numAttr, String attrName,
			List<String> listValue)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			String attrVal = "";
			if (numAttr != 0) {
				XPath xPath = XPathFactory.newInstance().newXPath();
				Document doc = getConfigFileDoc();
				int noOfRoles = ((NodeList) xPath
						.evaluate(WindowsAzureConstants.ROLE, doc,
								XPathConstants.NODESET)).getLength();
				// Check if the attribute is present for each role
				if (noOfRoles == numAttr) {
					String expr = String.format("%s%s%s%s",
							WindowsAzureConstants.CERTIFICATE, "[@name='",
							attrName, "']/@thumbprint");
					attrVal = xPath.evaluate(expr, doc);
					// Check if the attribute is having same value for each role
					for (int i = 0; i < listValue.size(); i++) {
						String value = listValue.get(i);
						if (!attrVal.equals(value)) {
							throw new WindowsAzureInvalidProjectOperationException();
						}
					}
				} else {
					throw new WindowsAzureInvalidProjectOperationException();
				}
			}
			return attrVal;
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException("Exception",
					ex);
		}
	}

	/**
	 * Sets the fingerprint of the certificate.
	 * 
	 * @param fingerprint
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public void setRemoteAccessCertificateFingerprint(String fingerprint)
			throws WindowsAzureInvalidProjectOperationException {
		if (fingerprint == null || fingerprint.isEmpty()) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		}
		try {
			List<WindowsAzureRole> listRoles = getRoles();
			for (Iterator<WindowsAzureRole> iterator = listRoles.iterator(); iterator
					.hasNext();) {
				WindowsAzureRole windowsAzureRole = iterator.next();
				windowsAzureRole.setThumbprint(fingerprint);
			}
			// Delete the comment corresponding to default .cer
			Document doc = getConfigFileDoc();
			XPath xPath = XPathFactory.newInstance().newXPath();
			String expr = String.format("%s%s%s%s", WindowsAzureConstants.ROLE,
					"/Certificates/comment()[contains(.,'",
					WindowsAzureConstants.THUMBPRINT_NOTE, "')]");
			Node node = (Node) xPath.evaluate(expr, doc, XPathConstants.NODE);
			if (node != null) {
				node.getParentNode().removeChild(node);
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_RA_SET_FPRINT, e);
		}
	}

	public boolean isCurrVersion()
			throws WindowsAzureInvalidProjectOperationException {
		boolean isCurrVersion = true;
		try {
			int version = 0;
			String currVersion = WindowsAzureConstants.VERSION;
			Document doc = getPackageFileDoc();
			XPath xPath = XPathFactory.newInstance().newXPath();
			String expr = WindowsAzureConstants.CREATOR_VER + "/@value";
			String strVersion = xPath.evaluate(expr, doc);
			if (!strVersion.isEmpty()) {
				strVersion = strVersion.replace(".", "");
				Integer integer = Integer.valueOf(strVersion);
				version = integer.intValue();
			}
			strVersion = currVersion.replace(".", "");
			Integer integer = Integer.valueOf(strVersion);
			int intCurrVersion = integer.intValue();
			if (version == 0 || version < intCurrVersion) {
				isCurrVersion = false;
			}
		} catch (Exception e) {
			isCurrVersion = false;
		}
		return isCurrVersion;
	}

	/**
	 * Returns current version of eclipse plugin
	 * 
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String getCurrVerion()
			throws WindowsAzureInvalidProjectOperationException {
		return WindowsAzureConstants.VERSION;
	}

	public void setVersion(String version)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			ParserXMLUtility.setExpressionValue(getPackageFileDoc(),
					WindowsAzureConstants.CREATOR_VER + "/@value", version);
		} catch (XPathExpressionException e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Error occurred while setting project version");
		}
	}

	public String getVersion()
			throws WindowsAzureInvalidProjectOperationException {
		try {
			return ParserXMLUtility.getExpressionValue(getPackageFileDoc(),
					WindowsAzureConstants.CREATOR_VER + "/@value");
		} catch (XPathExpressionException e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Error occurred while setting project version");
		}
	}

	/**
	 * Gets document for ServiceConfiguration.cscfg.
	 * 
	 * @return document object
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	protected Document getConfigFileDoc()
			throws WindowsAzureInvalidProjectOperationException {
		if (configFileDoc == null) {
			configFileDoc = ParserXMLUtility.parseXMLFile(configFilePath);
		}
		return configFileDoc;
	}

	/**
	 * Gets document for package.xml.
	 * 
	 * @return document object
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	protected Document getPackageFileDoc()
			throws WindowsAzureInvalidProjectOperationException {
		if (null == packageFileDoc) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_GET_PACKAGE_FILE);
		}
		return packageFileDoc;
	}

	/**
	 * Gets document for ServiceDefinition.csdef.
	 * 
	 * @return document object
	 * @throws WindowsAzureInvalidProjectOperationException
	 */

	protected Document getdefinitionFileDoc()
			throws WindowsAzureInvalidProjectOperationException {
		if (definitionFileDoc == null) {
			definitionFileDoc = ParserXMLUtility.parseXMLFile(defFilePath);
			if (definitionFileDoc == null) {
				throw new WindowsAzureInvalidProjectOperationException(
						WindowsAzureConstants.EXCP_RETRIEVE_DATA
								+ "ServiceDefinition.csdef");
			}
		}
		return definitionFileDoc;
	}

	protected WindowsAzureProjectManager getWindowsAzureProjMgr() {
		return winAzureProjMgr;
	}

	protected void setWindowsAzureProjMgr(WindowsAzureProjectManager waProjMgr) {
		this.winAzureProjMgr = waProjMgr;
	}

	/**
	 * Sets document for ServiceDefinition.csdef.
	 * 
	 * @param projectName
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public void setProjectName(String projectName)
			throws WindowsAzureInvalidProjectOperationException {
		if ((projectName == null) || (projectName.isEmpty())) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		}
		try {
			Node root = getPackageFileDoc().getDocumentElement();
			NamedNodeMap nMap = root.getAttributes();
			if (nMap != null) {
				nMap.getNamedItem("name").setNodeValue(projectName);
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_SET_PROJECT_NAME, e);
		}
	}

	/**
	 * Sets document for ServiceDefinition.csdef.
	 * 
	 * @param projectName
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public String getProjectName()
			throws WindowsAzureInvalidProjectOperationException {
		String projName = "";
		try {
			Node root = getPackageFileDoc().getDocumentElement();
			NamedNodeMap nMap = root.getAttributes();
			if (nMap != null) {
				projName = nMap.getNamedItem("name").getNodeValue();
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_GET_PROJECT_NAME, e);
		}
		return projName;
	}

	/**
	 * get Sticky session is enabled or not for any worker of this project
	 * 
	 * @return true if any of the role has enabled session affinity else false
	 */
	public boolean getSessionAffinityStatus() {
		boolean status = false;
		try {
			List<WindowsAzureRole> roles;
			roles = getRoles();
			for (WindowsAzureRole winAzureRole : roles) {
				WindowsAzureEndpoint wEp = winAzureRole
						.getSessionAffinityInputEndpoint();
				if (wEp != null) {
					status = true;
					break;
				}
			}
		} catch (WindowsAzureInvalidProjectOperationException e) {
			status = false;
		}
		return status;
	}

	/**
	 * This API is for disabling session affinity for all roles
	 * 
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public void disableSessionAffinity()
			throws WindowsAzureInvalidProjectOperationException {
		try {
			List<WindowsAzureRole> roles;
			roles = getRoles();
			for (WindowsAzureRole winAzureRole : roles) {
				winAzureRole.setSessionAffinityInputEndpoint(null);
			}
		} catch (WindowsAzureInvalidProjectOperationException ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_DISABLE_ALL_SA, ex);
		}
	}

	/**
	 * move project from temp location to given location.
	 * 
	 * @param projName
	 *            .
	 * @param projLocation
	 *            .
	 * @throws Exception .
	 */
	public static void moveProjFromTemp(String projName, String projLocation)
			throws WindowsAzureInvalidProjectOperationException {
		if ((projName == null) || projName.isEmpty()) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		}
		if ((projLocation == null) || projLocation.isEmpty()) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		}
		try {
			String tmpPath = System.getProperty("java.io.tmpdir");
			String source = String.format("%s%s%s", tmpPath, File.separator,
					"%proj%");
			String dest = String.format("%s%s%s", projLocation, File.separator,
					projName);
			ParserXMLUtility.copyDir(new File(source), new File(dest));
			String projXML = String.format("%s%s%s%s%s", projLocation,
					File.separator, projName, File.separator, "package.xml");
			Document projDoc = ParserXMLUtility.parseXMLFile(projXML);

			Node rootProj = projDoc.getDocumentElement();
			NamedNodeMap nMap = rootProj.getAttributes();
			if (nMap != null) {
				nMap.getNamedItem("name").setNodeValue(projName);
			}
			ParserXMLUtility.saveXMLFile(projXML, projDoc);
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_MOVE_PROJ_FROM_TEMP, ex);
		}
	}

	/**
	 * 
	 * @param vmSize
	 * @return maxLsSize local storage max size value
	 */
	public static int getMaxLocalStorageSize(String vmSize) {
		if ((vmSize == null) || (!waVmSize.contains(vmSize.toLowerCase()))) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		}
		int maxLsSize = 0;
		switch (WAvmSize.valueOf(vmSize.toUpperCase())) {
			case EXTRASMALL:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_EXTRASMALL;
				break;
			case SMALL:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_SMALL;
				break;
			case MEDIUM:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_MEDIUM;
				break;
			case LARGE:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_LARGE;
				break;
			case EXTRALARGE:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_EXTRALARGE;
				break;
			case A5:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_A5;
				break;
			case A6:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_A6;
				break;
			case A7:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_A7;
				break;
			case STANDARD_D1:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_STANDARD_D1;
				break;
			case STANDARD_D2:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_STANDARD_D2;
				break;			
			case STANDARD_D3:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_STANDARD_D3;
				break;
			case STANDARD_D4:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_STANDARD_D4;
				break;
			case STANDARD_D11:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_STANDARD_D11;
				break;
			case STANDARD_D12:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_STANDARD_D12;
				break;
			case STANDARD_D13:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_STANDARD_D13;
				break;
			case STANDARD_D14:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_STANDARD_D14;
				break;
			default:
				maxLsSize = WindowsAzureConstants.MAX_LS_SIZE_A8_A9;
		}
		return maxLsSize;
	}

	/**
	 * Discovers the path of the latest version of Azure SDK
	 * 
	 * @return The sdk path
	 * @throws IOException
	 */
	public static String getLatestAzureSdkDir() throws IOException {
		// Make sure that we use 64bit Program File even if we're running inside
		// WOW64 process
		String programFilesDir = System.getenv(ENV_PROGRAMFILES_WOW64);

		if (programFilesDir == null) {
			programFilesDir = System.getenv(ENV_PROGRAMFILES);
		}

		File sdkDir = new File(String.format(
				"%s%sMicrosoft SDKs%sAzure%s.NET SDK", programFilesDir,
				File.separatorChar, File.separatorChar, File.separatorChar));

		// Check if the SDK folder exists
		if (!sdkDir.exists()) {
			throw new IOException("Azure SDK is not installed.");
		}

		String[] versionedSDKDirs = sdkDir.list();
		String latestVersionSdkDir = null;
		if (versionedSDKDirs != null && versionedSDKDirs.length > 0) {
			TreeSet<String> sortedDirs = new TreeSet<String>(
					Arrays.asList(versionedSDKDirs));

			// From sorted list , consider the first latest version where we can
			// find cspack.exe in bin directory
			for (Iterator<String> iterator = sortedDirs.descendingIterator(); iterator
					.hasNext();) {
				File versionedSdkDir = new File(sdkDir, iterator.next());
				if (versionedSdkDir.isDirectory()) {

					// Since we are iterating in descending manner , below if
					// will be true only if SDK 2.8 or greater version is not
					// installed.
					// If greater version is installed we always break loop and
					// return the value.
					if (versionedSdkDir.getName().compareToIgnoreCase(
							WindowsAzureConstants.MIN_SDK_VERSION) < 0)
						throw new IOException("Azure SDK is not installed.");

					File csPackPath = new File(String.format(
							"%s%sbin%scspack.exe", versionedSdkDir.toString(),
							File.separatorChar, File.separatorChar));
					if (csPackPath.exists()) {
						latestVersionSdkDir = versionedSdkDir.toString();
						break;
					}
				}
			}
		}

		if (latestVersionSdkDir == null) {
			throw new IOException("Azure SDK is not installed.");
		}

		return String
				.format("%s%sbin", latestVersionSdkDir, File.separatorChar);
	}

	/**
	 * This method returns numerical version of Azure SDK
	 * 
	 * @return
	 * @throws IOException
	 */
	public static String getLatestAzureVersionForSA() {
		String sdkVersion = null;

		try {
			// TODO: See if there is better and reliable way to find out this,
			// for now this is good to go.
			sdkVersion = new File(getLatestAzureSdkDir()).getParentFile()
					.getName().substring(1)
					+ ".0.0";
		} catch (Exception e) {
			// Incase of any exception just return null string. so need to
			// handle any case here.
		}

		return sdkVersion;
	}

	/**
	 * Discovers the path of the emulator installation directory
	 * 
	 * @return The emulator installation directory
	 */
	private static String findEmulatorDir() throws IOException {
		// Make sure that we use 64bit Program File even if we're running inside
		// WOW64 process
		String programFilesDir = System.getenv(ENV_PROGRAMFILES_WOW64);

		if (programFilesDir == null) {
			programFilesDir = System.getenv(ENV_PROGRAMFILES);
		}

		File emulatorDir = new File(String.format(
				"%s%sMicrosoft SDKs%sAzure%sEmulator", programFilesDir,
				File.separatorChar, File.separatorChar, File.separatorChar));

		// Check if the Emulator folder exists
		if (emulatorDir.exists()) {
			return emulatorDir.toString();
		} else {
			throw new IOException("Azure SDK is not installed.");
		}
	}

	/**
	 * Discovers the path of the storage emulator installation directory
	 * 
	 * @return The storage emulator installation directory
	 */
	private static String findStorageEmulatorDir() throws IOException {
		// Make sure that we use 64bit Program File even if we're running inside
		// WOW64 process
		String programFilesDir = System.getenv(ENV_X86_PROGRAMFILES_WOW64);

		if (programFilesDir == null) {
			programFilesDir = System.getenv(ENV_PROGRAMFILES);
		}

		File storageEmulatorDir = new File(String.format(
				"%s%sMicrosoft SDKs%sAzure%sStorage Emulator",
				programFilesDir, File.separatorChar, File.separatorChar,
				File.separatorChar));

		// Check if the storage Emulator folder exists
		if (storageEmulatorDir.exists()) {
			return storageEmulatorDir.toString();
		} else {
			throw new IOException("Azure SDK v2.8 or later is not installed.");
		}
	}

	/**
	 * This API will call reset emulator functionality.
	 * 
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static void resetEmulator(String cmd)
			throws WindowsAzureInvalidProjectOperationException,
			RuntimeException {

		try {
			// copy to temp dir and then execute the ResetEmulator.cmd
			String emulatorDir = findEmulatorDir();
			String storageEmulatorDir = findStorageEmulatorDir();
			final String resetCmd = cmd.replace("${EmulatorDir}", emulatorDir)
					.replace("${StorageEmulatorDir}", storageEmulatorDir);
			;
			InputStream urlStream = new ByteArrayInputStream(
					resetCmd.getBytes("UTF-8"));
			String tmpPath = System.getProperty("java.io.tmpdir");
			String outputPath = String.format("%s%s%s", tmpPath,
					File.separator, "ResetEmulator.cmd");
			OutputStream out = new FileOutputStream(new File(outputPath));
			ParserXMLUtility.writeFile(urlStream, out);
			final File filePt = new File(outputPath);
			if (!filePt.exists()) {
				throw new WindowsAzureInvalidProjectOperationException(
						"resetemmulator.cmd not file not found");
			}
			Thread cmdTh = new Thread() {
				@Override
				public void run() {
					try {
						String args[] = {filePt.getAbsolutePath() };
						// new ProcessBuilder("cmd /c start " +
						// filePt.getAbsolutePath()).start();
						new ProcessBuilder(args).start();
					} catch (IOException ex) {
						// catching exception silently.
					}
				}
			};
			cmdTh.start();
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while resetting emmulator", e);
		}
	}

	/**
	 * This API will execute the RunInEmulator.cmd script which the Ant task
	 * generates on build when BuildFor=emulator. If it cannot find the script,
	 * then it shall throw. The location of the emulator tools folder where the
	 * script is shall be first looked up inside package.xml with this Xpath,
	 * keeping in mind it may reference Ant properties, such as ${basedir}:
	 * /project
	 * /target[@name='createwapackage']/windowsazurepackage/@emulatortoolsdir If
	 * it�s not set, then the emulatorTools folder inside the project shall be
	 * assumed.
	 * 
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public void deployToEmulator()
			throws WindowsAzureInvalidProjectOperationException,
			RuntimeException {
		String emmulatorPath = "";
		try {
			XPath xPath = XPathFactory.newInstance().newXPath();
			emmulatorPath = xPath
					.evaluate(WindowsAzureConstants.EMULATORTOOLSDIR,
							getPackageFileDoc());
			if (emmulatorPath.isEmpty()) {
				emmulatorPath = projDirPath + "\\emulatorTools";
			}
			String scriptPath = emmulatorPath + "\\RunInEmulator.cmd";
			File script = new File(scriptPath);
			if (!script.exists()) {
				throw new Exception(scriptPath + " not found");
			}

			final String escScriptPath = scriptPath;
			Thread cmdth = new Thread() {
				@Override
				public void run() {
					try {
						String args[] = { "cmd", "/c", escScriptPath };
						// new ProcessBuilder("cmd /c start " +
						// scriptPath).start();
						new ProcessBuilder(args).start();
					} catch (Exception ex) {
						// catching exception silently.
					}
				}
			};
			cmdth.start();
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception in deploytoEmulator", ex);
		}
	}

	/**
	 * This API checks location of the emulator tools folder where the script is
	 * shall be first looked up inside package.xml with this
	 * Xpath:/project/target
	 * [@name='createwapackage']/windowsazurepackage/@packagedir Note that this
	 * may reference Ant properties, such as ${basedir}, so the caller of this
	 * API will likely need to invoke Ant API to resolve the returned path to an
	 * actual file path. If it�s not set, then the deploy folder inside the
	 * project shall be assumed.
	 * 
	 * @return package dir.
	 * @throws WindowsAzureInvalidProjectOperationException .
	 */

	public String getPackageDir()
			throws WindowsAzureInvalidProjectOperationException {
		String packDir = "";
		try {

			XPath xPath = XPathFactory.newInstance().newXPath();
			packDir = xPath.evaluate(WindowsAzureConstants.PACKAGEDIR,
					getPackageFileDoc());
			packDir = getValOfVarInpac(packDir.substring(
					packDir.indexOf("${") + 2, packDir.indexOf("}")));
			if (packDir.isEmpty()) {
				packDir = projDirPath + "\\deploy";
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting package dir", e);
		}
		return packDir.replace("\\", File.separator); // temporary fix; todo?
	}

	private String getValOfVarInpac(String varName)
			throws WindowsAzureInvalidProjectOperationException {
		String val = "";
		try {
			XPath xPath = XPathFactory.newInstance().newXPath();
			String expr = String.format(WindowsAzureConstants.PROPERTY_VAL,
					varName);
			Element ele = (Element) xPath.evaluate(expr, getPackageFileDoc(),
					XPathConstants.NODE);
			if (ele == null) {
				// check the value in project attribute

				expr = "/project/@" + varName;
				val = xPath.evaluate(expr, getPackageFileDoc());
			} else {
				val = ele.getAttribute("location");
			}
			while (true) {
				if (val.contains("${")) {
					String newVarname = val.substring(val.indexOf("${") + 2,
							val.indexOf("}"));
					val = val
							.replace(
									val.substring(val.indexOf("${"),
											val.indexOf("}") + 1),
									getValOfVarInpac(newVarname));
				} else {
					break;
				}
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting getValOfVarInpac", e);
		}
		return val;
	}

	private static void dataTransfer(InputStream inputStream,
			BufferedOutputStream buffOutputStream) throws IOException {
		try {
			byte[] buffer = new byte[BUFF_SIZE];
			int transferLen = inputStream.read(buffer);

			while (transferLen >= 0) {
				buffOutputStream.write(buffer, 0, transferLen);
				transferLen = inputStream.read(buffer);
			}
		} catch(IOException e) {
			throw new IOException();
		} finally {
			try {
				inputStream.close();
				buffOutputStream.close();
			} catch (IOException e) {
				// neglect
			}
		}
	}

	/**
	 * API return list of names of the available server templates.
	 * 
	 * @param templateFile
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String[] getServerTemplateNames(File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			ArrayList<String> serverList = new ArrayList<String>();
			NodeList compSet = getComponentSets(templateFile, "server");
			for (int i = 0; i < compSet.getLength(); i++) {
				if (compSet.item(i).getAttributes().getLength() != 0) {
					Element ele = (Element) compSet.item(i);
					serverList.add(ele.getAttribute("name"));
				}
			}

			return serverList.toArray(new String[serverList.size()]);
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting server name", e);
		}
	}

	/**
	 * API returns array of third party JDK names
	 * in the order they appear in componentsets.xml.
	 * By default method won't include JDKs with status="deprecated"
	 * but in special case where
	 * user have already used deprecated JDK, we will add that to list.
	 * @param templateFile
	 * @param depJdkName - deprecated JDK name which should be added to list.
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String[] getThirdPartyJdkNames(File templateFile, String depJdkName)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			ArrayList<String> thrdJdkList = new ArrayList<String>();
			NodeList compSet = getComponentSets(templateFile, "JDK");
			for (int i = 0; i < compSet.getLength(); i++) {
				if (compSet.item(i).getAttributes().getLength() != 0) {
					Element ele = (Element) compSet.item(i);
					String name = ele.getAttribute("name");
					if (!name.equalsIgnoreCase("JDK")) {
						String status = ele.getAttribute("status");
						if (!status.equalsIgnoreCase("deprecated")) {
							// not deprecated then simply add
							thrdJdkList.add(name);
						} else if(status.equalsIgnoreCase("deprecated")
								&& !depJdkName.isEmpty()
								&& name.equalsIgnoreCase(depJdkName)) {
							/*
							 * deprecated but it needs to be added
							 * as user have used that JDK in project.
							 */
							thrdJdkList.add(name);
						}
					}
				}
			}
			String[] jdkArr = thrdJdkList
					.toArray(new String[thrdJdkList.size()]);
			// Arrays.sort(jdkArr);
			return jdkArr;
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting third party JDK names", e);
		}
	}
	
	/**
	 * Method returns first default JDK name from componentset
	 * if exists else returns empty string.
	 * @param templateFile
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String getFirstDefaultThirdPartyJdkName(File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			NodeList compSet = getComponentSets(templateFile, "JDK");
			for (int i = 0; i < compSet.getLength(); i++) {
				if (compSet.item(i).getAttributes().getLength() != 0) {
					Element ele = (Element) compSet.item(i);
					String name = ele.getAttribute("name");
					if (!name.equalsIgnoreCase("JDK")
							&& ele.getAttribute("default").equalsIgnoreCase("true")
							&& !ele.getAttribute("status").equalsIgnoreCase("deprecated")) {
						return name;
					}
				}
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting default third party JDK name", e);
		}
		return "";
	}

	/**
	 * API returns array of third party server names
	 * from specific server componentset in the order they appear.
	 * By default method won't include server's with status="deprecated"
	 * but in special case where
	 * user have already used deprecated server, we will add that to list.
	 * @param templateFile
	 * @param depSrvName - deprecated server name which should be added to list.
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String[] getThirdPartySrvNames(File templateFile, String srvName, String depSrvName)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			ArrayList<String> thrdSrvList = new ArrayList<String>();
			NodeList compSet = getComponentSets(templateFile, "server");
			for (int i = 0; i < compSet.getLength(); i++) {
				if (compSet.item(i).getAttributes().getLength() != 0) {
					Element ele = (Element) compSet.item(i);
					String name = ele.getAttribute("name");
					if (name.equalsIgnoreCase(srvName)) {
						NodeList downloadSet = getDownloadSets(templateFile, "server", srvName);
						for (int j = 0; j < downloadSet.getLength(); j++) {
							if (downloadSet.item(j).getAttributes().getLength() != 0) {
								Element downloadEle = (Element) downloadSet.item(j);
								String downloadName = downloadEle.getAttribute("name");
								String status = downloadEle.getAttribute("status");
								if (!status.equalsIgnoreCase("deprecated")) {
									// not deprecated then simply add
									thrdSrvList.add(downloadName);
								} else if(status.equalsIgnoreCase("deprecated")
										&& !depSrvName.isEmpty()
										&& downloadName.equalsIgnoreCase(depSrvName)) {
									/*
									 * deprecated but it needs to be added
									 * as user have used that server in project.
									 */
									thrdSrvList.add(depSrvName);
								}
							}
						}
						break;
					}
				}
			}
			String[] srvArr = thrdSrvList
					.toArray(new String[thrdSrvList.size()]);
			return srvArr;
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting third party server names", e);
		}
	}

	public static boolean checkCloudAndLocalFamilyAreEqual(
			File templateFile, String srvName, String cloudSrvName)
					throws WindowsAzureInvalidProjectOperationException {
		String[] srvArr = getThirdPartySrvNames(templateFile, srvName, "");
		return Arrays.asList(srvArr).contains(cloudSrvName);
	}
	
	public static String getServerNameUsingThirdPartyServerName(String thrdSrvName, File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		String name = "";
		try {
			NodeList compSet = getComponentSets(templateFile, "server");
			for (int i = 0; i < compSet.getLength(); i++) {
				if (compSet.item(i).getAttributes().getLength() != 0) {
					Element ele = (Element) compSet.item(i);
					name = ele.getAttribute("name");
					NodeList downloadSet = getDownloadSets(templateFile, "server", name);
					for (int j = 0; j < downloadSet.getLength(); j++) {
						if (downloadSet.item(j).getAttributes().getLength() != 0) {
							Element downloadEle = (Element) downloadSet.item(j);
							if (downloadEle.getAttribute("name").equalsIgnoreCase(thrdSrvName)) {
								return name;
							}
						}
					}
				}
			}
			return name;
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting server name with the help of third party server name", e);
		}
	}

	/**
	 * API returns array of all third party server names
	 * from componentset in the order they appear.
	 * By default method won't include server's with status="deprecated"
	 * but in special case where
	 * user have already used deprecated server, we will add that to list.
	 * @param templateFile
	 * @param depSrvName - deprecated server name which should be added to list.
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String[] getAllThirdPartySrvNames(File templateFile, String depSrvName)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			ArrayList<String> thrdSrvList = new ArrayList<String>();
			NodeList compSet = getComponentSets(templateFile, "server");
			for (int i = 0; i < compSet.getLength(); i++) {
				if (compSet.item(i).getAttributes().getLength() != 0) {
					Element ele = (Element) compSet.item(i);
					String name = ele.getAttribute("name");
					NodeList downloadSet = getDownloadSets(templateFile, "server", name);
					for (int j = 0; j < downloadSet.getLength(); j++) {
						if (downloadSet.item(j).getAttributes().getLength() != 0) {
							Element downloadEle = (Element) downloadSet.item(j);
							String downloadName = downloadEle.getAttribute("name");
							String status = downloadEle.getAttribute("status");
							if (!status.equalsIgnoreCase("deprecated")) {
								// not deprecated then simply add
								thrdSrvList.add(downloadName);
							} else if(status.equalsIgnoreCase("deprecated")
									&& !depSrvName.isEmpty()
									&& downloadName.equalsIgnoreCase(depSrvName)) {
								/*
								 * deprecated but it needs to be added
								 * as user have used that server in project.
								 */
								thrdSrvList.add(depSrvName);
							}
						}
					}
				}
			}
			String[] srvArr = thrdSrvList
					.toArray(new String[thrdSrvList.size()]);
			return srvArr;
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting third party server names", e);
		}
	}

	/**
	 * Method returns default server name from specific server componentset
	 * if exists else returns empty string.
	 * @param templateFile
	 * @param srvName
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String getDefaultThirdPartySrvName(File templateFile, String srvName)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			NodeList compSet = getComponentSets(templateFile, "server");
			for (int i = 0; i < compSet.getLength(); i++) {
				if (compSet.item(i).getAttributes().getLength() != 0) {
					Element ele = (Element) compSet.item(i);
					String name = ele.getAttribute("name");
					if (name.equalsIgnoreCase(srvName)) {
						NodeList downloadSet = getDownloadSets(templateFile, "server", srvName);
						for (int j = 0; j < downloadSet.getLength(); j++) {
							if (downloadSet.item(j).getAttributes().getLength() != 0) {
								Element downloadEle = (Element) downloadSet.item(j);
								if (!downloadEle.getAttribute("status").equalsIgnoreCase("deprecated")
										&& downloadEle.getAttribute("default").equalsIgnoreCase("true")) {
									return downloadEle.getAttribute("name");
								}
							}
						}
					}
				}
			}	
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting default third party server name", e);
		}
		return "";
	}
	
	/**
	 * Method returns first default server name from componentset
	 * if exists else returns empty string.
	 * @param templateFile
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String getFirstDefaultThirdPartySrvName(File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			NodeList compSet = getComponentSets(templateFile, "server");
			for (int i = 0; i < compSet.getLength(); i++) {
				if (compSet.item(i).getAttributes().getLength() != 0) {
					Element ele = (Element) compSet.item(i);
					String name = ele.getAttribute("name");
					NodeList downloadSet = getDownloadSets(templateFile, "server", name);
					for (int j = 0; j < downloadSet.getLength(); j++) {
						if (downloadSet.item(j).getAttributes().getLength() != 0) {
							Element downloadEle = (Element) downloadSet.item(j);
							if (!downloadEle.getAttribute("status").equalsIgnoreCase("deprecated")
									&& downloadEle.getAttribute("default").equalsIgnoreCase("true")) {
								return downloadEle.getAttribute("name");
							}
						}
					}
				}
			}	
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting default third party server name", e);
		}
		return "";
	}
	
	/**
	 * API returns license URL of third party server.
	 * 
	 * @param srvName
	 * @param templateFile
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String getThirdPartyServerLicenseUrl(String srvName, File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			return getThirdPartyServerAttribute(srvName, templateFile, WindowsAzureConstants.ATTR_LCNS_VAL);
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting third party server's license URL", e);
		}
	}

	/**
	 * API returns license URL of third party JDK as per JDK name.
	 * 
	 * @param jdkName
	 * @param templateFile
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String getLicenseUrl(String jdkName, File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		String licenseUrl = "";
		try {
			NodeList compSet = getComponentSets(templateFile, "JDK");
			for (int i = 0; i < compSet.getLength(); i++) {
				if (compSet.item(i).getAttributes().getLength() != 0) {
					Element ele = (Element) compSet.item(i);
					if (ele.getAttribute("name").equalsIgnoreCase(jdkName)) {
						licenseUrl = ele
								.getAttribute(WindowsAzureConstants.ATTR_LCNS_VAL);
						return licenseUrl;
					}
				}
			}
			return licenseUrl;
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting third party JDK license URL", e);
		}
	}

	/**
	 * API returns cloud value of third party JDK as per JDK name.
	 * 
	 * @param jdkName
	 * @param templateFile
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String getCloudValue(String jdkName, File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		String cloudValue = "";
		try {
			NodeList nodeList = getThirdPartyJdkCmpntSets(jdkName, templateFile);
			if (nodeList != null) {
				for (int i = 0; i < nodeList.getLength(); i++) {
					Node compNode = (Node) nodeList.item(i);
					if (!compNode.hasAttributes()) {
						continue;
					}
					Element compEle = (Element) compNode;
					if (compEle.getNodeName().equalsIgnoreCase("startupenv")
							&& compEle.getAttribute("type").equalsIgnoreCase(
									"jdk.home")) {
						cloudValue = compEle
								.getAttribute(WindowsAzureConstants.ATTR_CLD_VAL);
						return cloudValue;
					}
				}
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting third party JDK cloud value", e);
		}
		return cloudValue;
	}
	
	/**
	 * API returns cloud alternative source of third party server.
	 * @param srvName
	 * @param templateFile
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String getThirdPartyServerCloudAltSrc(String srvName, File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			return getThirdPartyServerAttribute(srvName, templateFile, WindowsAzureConstants.ATTR_CLD_ALT_SRC);
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting third party server's cloud alternative source.", e);
		}
	}

	/**
	 * API returns cloud source of third party server.
	 * @param srvName
	 * @param templateFile
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String getThirdPartyServerCloudSrc(String srvName, File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			return getThirdPartyServerAttribute(srvName, templateFile, WindowsAzureConstants.ATTR_CURL);
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting third party server's cloud source.", e);
		}
	}

	/**
	 * API returns attribute value of third party server.
	 * @param srvName
	 * @param templateFile
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	private static String getThirdPartyServerAttribute(String srvName, File templateFile, String attribute)
			throws WindowsAzureInvalidProjectOperationException {
		String attributeVal = "";
		try {
			NodeList compSet = getComponentSets(templateFile, "server");
			for (int i = 0; i < compSet.getLength(); i++) {
				if (compSet.item(i).getAttributes().getLength() != 0) {
					Element ele = (Element) compSet.item(i);
					String name = ele.getAttribute("name");
					NodeList downloadSet = getDownloadSets(templateFile, "server", name);
					for (int j = 0; j < downloadSet.getLength(); j++) {
						if (downloadSet.item(j).getAttributes().getLength() != 0) {
							Element downloadEle = (Element) downloadSet.item(j);
							if (downloadEle.getAttribute("name").equalsIgnoreCase(srvName)) {
								return downloadEle.getAttribute(attribute);
							}
						}
					}
				}
			}
			return attributeVal;
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting third party server's attribute", e);
		}
	}
	
	/**
	 * API returns home directory of third party server.
	 * @param srvName
	 * @param templateFile
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String getThirdPartyServerHome(String srvName, File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			return getThirdPartyServerAttribute(srvName, templateFile, "home");
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting third party server's home", e);
		}
	}

	/**
	 * API returns cloud alternative source of third party JDK as per JDK name.
	 * 
	 * @param jdkName
	 * @param templateFile
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String getCloudAltSrc(String jdkName, File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		String cldAltSrc = "";
		try {
			NodeList nodeList = getThirdPartyJdkCmpntSets(jdkName, templateFile);
			if (nodeList != null) {
				for (int i = 0; i < nodeList.getLength(); i++) {
					Node compNode = (Node) nodeList.item(i);
					if (!compNode.hasAttributes()) {
						continue;
					}
					Element compEle = (Element) compNode;
					if (compEle.getNodeName().equalsIgnoreCase("component")) {
						cldAltSrc = compEle
								.getAttribute(WindowsAzureConstants.ATTR_CLD_ALT_SRC);
						return cldAltSrc;
					}
				}
			}
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting third party JDK cloud alternative source",
					e);
		}
		return cldAltSrc;
	}

	/**
	 * Returns NodeList of componentset elements with type="JDK" and third party
	 * JDK name.
	 * 
	 * @param jdkName
	 * @param templateFile
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 * @throws XPathExpressionException
	 */
	private static NodeList getThirdPartyJdkCmpntSets(String jdkName,
			File templateFile)
			throws WindowsAzureInvalidProjectOperationException,
			XPathExpressionException {
		NodeList nodelist = null;
		// parse template file and find componentset name
		Document compDoc = ParserXMLUtility.parseXMLFile(templateFile
				.getAbsolutePath());
		XPath xPath = XPathFactory.newInstance().newXPath();
		// check for third party JDK
		if (jdkName != null && !jdkName.isEmpty()) {
			String expr = String.format(WindowsAzureConstants.TEMP_SERVER_COMP,
					"JDK", jdkName);
			Element compSet = (Element) xPath.evaluate(expr, compDoc,
					XPathConstants.NODE);
			if (compSet != null) {
				nodelist = compSet.getChildNodes();
			}
		}
		return nodelist;
	}

	/**
	 * Returns NodeList of componentset elements with type="type".
	 * 
	 * @throws WindowsAzureInvalidProjectOperationException
	 * @throws XPathExpressionException
	 */
	private static NodeList getComponentSets(File templateFile, String type)
			throws WindowsAzureInvalidProjectOperationException,
			XPathExpressionException {
		XPath xPath = XPathFactory.newInstance().newXPath();
		Document compDoc = ParserXMLUtility.parseXMLFile(templateFile
				.getAbsolutePath());
		String expr = String.format(WindowsAzureConstants.TEMP_COMPONENTSET,
				type);
		return (NodeList) xPath.evaluate(expr, compDoc, XPathConstants.NODESET);
	}

	/**
	 * Returns NodeList of downloads elements.
	 * @param templateFile
	 * @param type - JDK or server
	 * @param name - JDK or server name
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 * @throws XPathExpressionException
	 */
	private static NodeList getDownloadSets(File templateFile, String type, String name)
			throws WindowsAzureInvalidProjectOperationException,
			XPathExpressionException {
		XPath xPath = XPathFactory.newInstance().newXPath();
		Document compDoc = ParserXMLUtility.parseXMLFile(templateFile.getAbsolutePath());
		String expr = String.format(WindowsAzureConstants.DOWNLOADSET, type, name);
		return (NodeList) xPath.evaluate(expr, compDoc, XPathConstants.NODESET);
	}
	

	/**
	 * Returns the componentsets.xml version in plugins folder.
	 * 
	 * @param templateFile
	 * @return version if exists else null
	 * @throws WindowsAzureInvalidProjectOperationException
	 */

	public static String getComponentSetsVersion(File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		Document compDoc = ParserXMLUtility.parseXMLFile(templateFile
				.getAbsolutePath());

		String value = null;
		try {
			value = ParserXMLUtility.getExpressionValue(compDoc,
					WindowsAzureConstants.COMPONENTSETS_VERSION);
		} catch (Exception e) {
			// value will be null in this case , just print the stack trace
			e.printStackTrace();
		}
		return value;
	}

	/**
	 * Returns the preferencesets.xml version in plugins folder.
	 * 
	 * @param templateFile
	 * @return version if exists else null
	 * @throws WindowsAzureInvalidProjectOperationException
	 */

	public static String getPreferenceSetsVersion(File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		Document prefDoc = ParserXMLUtility.parseXMLFile(templateFile
				.getAbsolutePath());

		String value = null;
		try {
			value = ParserXMLUtility.getExpressionValue(prefDoc,
					WindowsAzureConstants.PREFERENCESETS_VERSION);
		} catch (Exception e) {
			// value will be null in this case , just print the stack trace
			e.printStackTrace();
		}
		return value;
	}

	/**
	 * API return map of server detection paths of the available server
	 * templates.
	 * 
	 * @param templateFile
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static Map<String, String> getServerTemplateDetectors(
			File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		return getServerTemplateDetectors(templateFile, "detectpath");
	}

	/**
	 * API to return map of server detection text patterns of the available
	 * server templates.
	 * 
	 * @param templateFile
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static Map<String, String> getServerTemplatePatterns(
			File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		return getServerTemplateDetectors(templateFile, "detecttext");
	}

	private static Map<String, String> getServerTemplateDetectors(
			File templateFile, String attrName)
			throws WindowsAzureInvalidProjectOperationException {

		final HashMap<String, String> serverDetectors = new HashMap<String, String>();

		try {
			final NodeList compSet = getComponentSets(templateFile, "server");

			for (int i = 0; i < compSet.getLength(); i++) {
				if (compSet.item(i).getAttributes().getLength() > 1) {
					Element ele = (Element) compSet.item(i);
					String serverName = ele.getAttribute("name");
					String serverDetector = ele.getAttribute(attrName);
					if (!serverName.isEmpty() && !serverDetector.isEmpty()) {
						serverDetectors.put(serverName, serverDetector);
					}
				}
			}

			return serverDetectors;
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception reading server templates", e);
		}
	}

	protected static boolean deleteDir(File dir) {
		boolean status = true;
		if (dir.isDirectory()) {
			String[] children = dir.list();
			for (int i = 0; i < children.length; i++) {
				boolean success = deleteDir(new File(dir, children[i]));
				if (!success) {
					status = false;
				}
			}
		}
		// The directory is now empty so delete it
		if (status) {
			status = dir.delete();
		}
		return status;
	}

	/**
	 * This method returns SSL endpoint when SSL configured endpoints are the
	 * only one that are configured i.e. no other input endpoints exists with
	 * protocol tcp or http.
	 * 
	 * @return
	 */
	public WindowsAzureEndpoint getSSLInfoIfUnique() {
		WindowsAzureEndpoint sslUnqEndPoint = null;

		try {
			List<WindowsAzureRole> roles;
			roles = getRoles();
			// Get SSL configured end point
			for (WindowsAzureRole winAzureRole : roles) {
				sslUnqEndPoint = winAzureRole.getSslOffloadingInputEndpoint();
				if (sslUnqEndPoint != null) {
					break;
				}
			}

			// Check if there are any other input endpoints
			if (sslUnqEndPoint != null) {
				for (WindowsAzureRole winAzureRole : roles) {
					List<WindowsAzureEndpoint> roleEndPoints = winAzureRole
							.getEndpoints();

					for (WindowsAzureEndpoint ep : roleEndPoints) {
						if (ep.getEndPointType().equals(
								WindowsAzureEndpointType.Input)
								&& !ep.getProtocol().equalsIgnoreCase("https")
								&& !sslUnqEndPoint.getName().equals(
										ep.getName())) {
							// Other non-https input endpoints exists , so https
							// endpoints are not the only one.
							return null;
						}
					}
				}
			}

			return sslUnqEndPoint;
		} catch (WindowsAzureInvalidProjectOperationException e) {
			e.printStackTrace();
			return null;
		}

	}

	/** Sets classpath entries in package.xml */
	public void setClassPathInPackage(String libDirName, String libDirLocation)
			throws WindowsAzureInvalidProjectOperationException {
		String nodeExpr = String.format(
				WindowsAzureConstants.PROJ_GLOBAL_PROPERTY, libDirName);

		HashMap<String, String> nodeAttribites = new HashMap<String, String>();
		nodeAttribites.put("name", libDirName);
		nodeAttribites.put("location", libDirLocation);
		ParserXMLUtility.updateOrCreateElement(packageFileDoc, nodeExpr,
				"/project", WindowsAzureConstants.PROJ_PROPERTY_ELEMENT_NAME,
				false, nodeAttribites);
	}

	/**
	 * API returns http port of application server as per server name.
	 * 
	 * @param srvName
	 * @param templateFile
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static String getHttpPort(String srvName, File templateFile)
			throws WindowsAzureInvalidProjectOperationException {
		String httpPort = "";
		try {
			NodeList compSet = getComponentSets(templateFile, "server");
			for (int i = 0; i < compSet.getLength(); i++) {
				if (compSet.item(i).getAttributes().getLength() != 0) {
					Element ele = (Element) compSet.item(i);
					if (ele.getAttribute("name").equalsIgnoreCase(srvName)) {
						httpPort = ele
								.getAttribute(WindowsAzureConstants.ATTR_HTTP_PORT);
						return httpPort;
					}
				}
			}
			return httpPort;
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					"Exception while getting server's http port", e);
		}
	}

	/**
	 * This API upgrades package.xml to include azure libraries
	 */
	public void upgradePackageFileDoc(String azureLibPath)
			throws WindowsAzureInvalidProjectOperationException {

		try {
			Document packageFileDoc = getPackageFileDoc();

			XPath xPath = XPathFactory.newInstance().newXPath();

			// Add cspack location
			String nodeExpr = String.format(WindowsAzureConstants.PROJ_GLOBAL_PROPERTY, "cspack.dir");
			HashMap<String, String> nodeAttribites = new HashMap<String, String>();
			nodeAttribites.put("name", "cspack.dir");
			nodeAttribites.put("location", ".");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, nodeExpr, "/project",
					WindowsAzureConstants.PROJ_PROPERTY_ELEMENT_NAME, true, nodeAttribites);

			// Add AzureLib location
			nodeExpr = String.format(WindowsAzureConstants.PROJ_GLOBAL_PROPERTY, "azure.lib.dir");
			nodeAttribites = new HashMap<String, String>();
			nodeAttribites.put("name", "azure.lib.dir");
			nodeAttribites.put("location", azureLibPath);
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, nodeExpr, "/project",
					WindowsAzureConstants.PROJ_PROPERTY_ELEMENT_NAME, true, nodeAttribites);

			// Add build classpath
			nodeExpr = "/project/path[@id='build.classpath']";
			nodeAttribites = new HashMap<String, String>();
			nodeAttribites.put("id", "build.classpath");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, nodeExpr, "/project",
					"path", false, nodeAttribites);
			
			nodeExpr = "/project/path[@id='build.classpath']/fileset[@dir='${cspack.dir}']";
			nodeAttribites = new HashMap<String, String>();
			nodeAttribites.put("dir", "${cspack.dir}");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, nodeExpr,
					"/project/path[@id='build.classpath']",
					"fileset", true, nodeAttribites);
			
			
			nodeExpr = "/project/path[@id='build.classpath']/fileset[@dir='${cspack.dir}']/include";
			nodeAttribites = new HashMap<String, String>();
			nodeAttribites.put("name", "**/*.jar");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, nodeExpr,
					"/project/path[@id='build.classpath']/fileset[@dir='${cspack.dir}']",
					"include", true, nodeAttribites);
			
			// new fileset
			nodeExpr = "/project/path[@id='build.classpath']/fileset[@dir='${azure.lib.dir}']";
			nodeAttribites = new HashMap<String, String>();
			nodeAttribites.put("dir", "${azure.lib.dir}");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, nodeExpr, "/project/path",
					"fileset", false, nodeAttribites);
			
			nodeExpr = "/project/path[@id='build.classpath']/fileset[@dir='${azure.lib.dir}']/include[@name='*.jar']";
			nodeAttribites = new HashMap<String, String>();
			nodeAttribites.put("name", "*.jar");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, nodeExpr,
					"/project/path[@id='build.classpath']/fileset[@dir='${azure.lib.dir}']",
					"include", true, nodeAttribites);
			
			nodeExpr = "/project/path[@id='build.classpath']/fileset[@dir='${azure.lib.dir}']/include[@name='dependencies/*.jar']";
			nodeAttribites = new HashMap<String, String>();
			nodeAttribites.put("name", "dependencies/*.jar");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, nodeExpr,
					"/project/path[@id='build.classpath']/fileset[@dir='${azure.lib.dir}']",
					"include", false, nodeAttribites);

			// Update taskdef attributes
			String taskDefExpr = WindowsAzureConstants.AZURE_PKG_TASK_DEF;
			Element taskDefEle = (Element) xPath.evaluate(taskDefExpr,
					packageFileDoc, XPathConstants.NODE);
			taskDefEle.removeAttribute("classpath");
			taskDefEle.setAttribute("classpathref", "build.classpath");

		} catch (Exception e) {
			// ignore exception if there are any
			e.printStackTrace();
		}
	}		
	
	public void setPublishSettingsPath(String publishSettingsPath) throws WindowsAzureInvalidProjectOperationException {
		updateGlobalPropertyLocation(WindowsAzureConstants.PROJ_GLOBAL_PROP_PUBLISH_SETTINGS_PATH_NAME, publishSettingsPath);
	}
		
	public String getPublishSettingsPath() throws WindowsAzureInvalidProjectOperationException {
		return getGlobalPropertyLocation(WindowsAzureConstants.PROJ_GLOBAL_PROP_PUBLISH_SETTINGS_PATH_NAME);
	}
	
	public void setPublishSubscriptionId(String subscriptionId) throws WindowsAzureInvalidProjectOperationException {
		updateGlobalPropertyValue(WindowsAzureConstants.PROJ_GLOBAL_PROP_SUBSCRIPTION_ID_NAME, subscriptionId);
	}
		
	public String getPublishSubscriptionId() throws WindowsAzureInvalidProjectOperationException {
		return getGlobalPropertyValue(WindowsAzureConstants.PROJ_GLOBAL_PROP_SUBSCRIPTION_ID_NAME);
	}
	
	public void setPublishCloudServiceName(String cloudServiceName) throws WindowsAzureInvalidProjectOperationException {
		updateGlobalPropertyValue(WindowsAzureConstants.PROJ_GLOBAL_PROP_CLOUD_SERVICE_NAME, cloudServiceName);
	}
		
	public String getPublishCloudServiceName() throws WindowsAzureInvalidProjectOperationException {
		return getGlobalPropertyValue(WindowsAzureConstants.PROJ_GLOBAL_PROP_CLOUD_SERVICE_NAME);
	}
	
	public void setPublishRegion(String region) throws WindowsAzureInvalidProjectOperationException {
		updateGlobalPropertyValue(WindowsAzureConstants.PROJ_GLOBAL_PROP_REGION_NAME, region);
	}
		
	public String getPublishRegion() throws WindowsAzureInvalidProjectOperationException {
		return getGlobalPropertyValue(WindowsAzureConstants.PROJ_GLOBAL_PROP_REGION_NAME);
	}
	
	public void setPublishStorageAccountName(String storageAccountName) throws WindowsAzureInvalidProjectOperationException {
		updateGlobalPropertyValue(WindowsAzureConstants.PROJ_GLOBAL_PROP_STORAGE_ACCOUNT_NAME, storageAccountName);
	}
		
	public String getPublishStorageAccountName() throws WindowsAzureInvalidProjectOperationException {
		return getGlobalPropertyValue(WindowsAzureConstants.PROJ_GLOBAL_PROP_STORAGE_ACCOUNT_NAME);
	}
	
	public void setPublishDeploymentSlot(DeploymentSlot deploymentSlot) throws WindowsAzureInvalidProjectOperationException {
		updateGlobalPropertyValue(WindowsAzureConstants.PROJ_GLOBAL_PROP_DEPLOYMENT_SLOT_NAME, deploymentSlot.toString());
	}
		
	public DeploymentSlot getPublishDeploymentSlot() throws WindowsAzureInvalidProjectOperationException {
		return DeploymentSlot.valueOf(getGlobalPropertyValue(WindowsAzureConstants.PROJ_GLOBAL_PROP_DEPLOYMENT_SLOT_NAME));
	}
	
	public void setPublishOverwritePreviousDeployment(boolean overwritePreviousDeployment) throws WindowsAzureInvalidProjectOperationException {
		updateGlobalPropertyValue(WindowsAzureConstants.PROJ_GLOBAL_PROP_OVERWRITE_PREV_DEPLOYMENT_NAME, overwritePreviousDeployment+"");
	}
		
	public boolean getPublishOverwritePreviousDeployment() throws WindowsAzureInvalidProjectOperationException {
		return Boolean.parseBoolean(getGlobalPropertyValue(WindowsAzureConstants.PROJ_GLOBAL_PROP_OVERWRITE_PREV_DEPLOYMENT_NAME));
	}
		
	private void updateGlobalPropertyLocation(String propertyName, String value) throws WindowsAzureInvalidProjectOperationException {
		try {
			String nodeExpr = String.format(WindowsAzureConstants.PROJ_GLOBAL_PROPERTY, propertyName);
			HashMap<String, String> nodeAttribites = new HashMap<String, String>();
			nodeAttribites.put("name", propertyName);
			nodeAttribites.put("location", value);
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, nodeExpr, "/project", WindowsAzureConstants.PROJ_PROPERTY_ELEMENT_NAME,
													true, nodeAttribites);
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(WindowsAzureConstants.EXCP_GET_PROJECT_PROP, ex);
			
		}
	}
	
	private void updateGlobalPropertyValue(String propertyName, String value) throws WindowsAzureInvalidProjectOperationException {
		try {
			String nodeExpr = String.format(WindowsAzureConstants.PROJ_GLOBAL_PROPERTY, propertyName);
			HashMap<String, String> nodeAttribites = new HashMap<String, String>();
			nodeAttribites.put("name", propertyName);
			nodeAttribites.put("value", value);
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, nodeExpr, "/project", WindowsAzureConstants.PROJ_PROPERTY_ELEMENT_NAME,
													true, nodeAttribites);
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(WindowsAzureConstants.EXCP_GET_PROJECT_PROP, ex);
			
		}
	}
	
	private String getGlobalPropertyLocation(String propertyName) throws WindowsAzureInvalidProjectOperationException {
		try {
			String nodeExpr = String.format(WindowsAzureConstants.PROJ_GLOBAL_PROPERTY_LOCATION, propertyName);
			return ParserXMLUtility.getExpressionValue(packageFileDoc, nodeExpr);
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(WindowsAzureConstants.EXCP_SET_PROJECT_PROP, ex);
		}
	}
	
	private String getGlobalPropertyValue(String propertyName) throws WindowsAzureInvalidProjectOperationException {
		try {
			String nodeExpr = String.format(WindowsAzureConstants.PROJ_GLOBAL_PROPERTY_VALUE, propertyName);
			return ParserXMLUtility.getExpressionValue(packageFileDoc, nodeExpr);
		} catch (Exception ex) {
			throw new WindowsAzureInvalidProjectOperationException(WindowsAzureConstants.EXCP_SET_PROJECT_PROP, ex);
		}
	}
	
	/**
	 * This method is for adding newly added xml elements into package.xml
	 */
	public void upgradePackageDoc() throws WindowsAzureInvalidProjectOperationException {
		// Adding hardcoded values since these things are temporary for a release.
		
		// Insert global properties for first time
		// Ideally node exists check logic can be separated.
		if (!ParserXMLUtility.doesNodeExists(packageFileDoc, String.format(WindowsAzureConstants.PROJ_GLOBAL_PROPERTY,
				WindowsAzureConstants.PROJ_GLOBAL_PROP_OVERWRITE_PREV_DEPLOYMENT_NAME))) {
			setPublishOverwritePreviousDeployment(true);
		}
		
		if (!ParserXMLUtility.doesNodeExists(packageFileDoc, String.format(WindowsAzureConstants.PROJ_GLOBAL_PROPERTY,
				WindowsAzureConstants.PROJ_GLOBAL_PROP_DEPLOYMENT_SLOT_NAME))) {
			setPublishDeploymentSlot(DeploymentSlot.Staging);
		}
		
		if (!ParserXMLUtility.doesNodeExists(packageFileDoc, String.format(WindowsAzureConstants.PROJ_GLOBAL_PROPERTY,
				WindowsAzureConstants.PROJ_GLOBAL_PROP_STORAGE_ACCOUNT_NAME))) {
			setPublishStorageAccountName("");
		}
		
		if (!ParserXMLUtility.doesNodeExists(packageFileDoc, String.format(WindowsAzureConstants.PROJ_GLOBAL_PROPERTY,
				WindowsAzureConstants.PROJ_GLOBAL_PROP_REGION_NAME))) {
			setPublishRegion("");
		}
		
		if (!ParserXMLUtility.doesNodeExists(packageFileDoc, String.format(WindowsAzureConstants.PROJ_GLOBAL_PROPERTY,
				WindowsAzureConstants.PROJ_GLOBAL_PROP_CLOUD_SERVICE_NAME))) {
			setPublishCloudServiceName("");
		}
		
		if (!ParserXMLUtility.doesNodeExists(packageFileDoc, String.format(WindowsAzureConstants.PROJ_GLOBAL_PROPERTY,
				WindowsAzureConstants.PROJ_GLOBAL_PROP_SUBSCRIPTION_ID_NAME))) {
			setPublishSubscriptionId("");
		}
		
		if (!ParserXMLUtility.doesNodeExists(packageFileDoc, String.format(WindowsAzureConstants.PROJ_GLOBAL_PROPERTY, 
				WindowsAzureConstants.PROJ_GLOBAL_PROP_PUBLISH_SETTINGS_PATH_NAME))) { 
			setPublishSettingsPath("");
		}
	
		HashMap<String, String> nodeAttribites = new HashMap<String, String>();
		String nodeExpr = null;
		
		// windowsazurepackage element
		nodeExpr = String.format(WindowsAzureConstants.PROJ_GLOBAL_TARGET, "createwapackage")+"/parallel/windowsazurepackage";
		if (ParserXMLUtility.doesNodeExists(packageFileDoc, nodeExpr)) {
			// Add additional attributes for windowsazurepackage element
			nodeAttribites.clear();
			nodeAttribites.put("publishsettingspath", "${publishsettingspath}");
			nodeAttribites.put("region", "${region}");
			nodeAttribites.put("storageaccountname", "${storageaccountname}");
			nodeAttribites.put("subscriptionid", "${subscriptionid}");
			String parentNodeExpr = String.format(WindowsAzureConstants.PROJ_GLOBAL_TARGET, "createwapackage")+"/parallel";
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, nodeExpr, parentNodeExpr, "windowsazurepackage", false, nodeAttribites);
		}
		
		if (!ParserXMLUtility.doesNodeExists(packageFileDoc, String.format(WindowsAzureConstants.PROJ_GLOBAL_TARGET, "publish"))) { 
			// Add publish target. 
			nodeAttribites.clear();
			nodeAttribites.put("name", "publish");
			nodeAttribites.put("description", "Publish Azure project to cloud");
			nodeAttribites.put("depends", "createwapackage");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, null, "/project", "target", false, nodeAttribites);
			
			// Insert child elements for target publish
			nodeExpr = String.format(WindowsAzureConstants.PROJ_GLOBAL_TARGET, "publish");
			nodeAttribites.clear();
			nodeAttribites.put("cloudservicename", "${cloudservicename}");
			nodeAttribites.put("deploymentslot", "${deploymentslot}");
			nodeAttribites.put("overwritepreviousdeployment", "${overwritepreviousdeployment}");
			nodeAttribites.put("projectdir", "${basedir}");
			nodeAttribites.put("publishsettingspath", "${publishsettingspath}");
			nodeAttribites.put("region", "${region}");
			nodeAttribites.put("storageaccountname", "${storageaccountname}");
			nodeAttribites.put("subscriptionid", "${subscriptionid}");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, null, nodeExpr, "azurepublish", false, nodeAttribites);
				
			nodeAttribites.clear();
			nodeAttribites.put("name", "azurepublish");
			nodeAttribites.put("classpathref", "build.classpath");
			nodeAttribites.put("classname", "com.microsoftopentechnologies.windowsazure.tools.build.AzurePublish");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, null, nodeExpr, "taskdef", true, nodeAttribites);
		}
		
		if (!ParserXMLUtility.doesNodeExists(packageFileDoc, String.format(WindowsAzureConstants.PROJ_GLOBAL_TARGET, "unpublish"))) {
			// Add unpublish target
			nodeAttribites.clear();
			nodeAttribites.put("name", "unpublish");
			nodeAttribites.put("description", "Unpublish Azure project");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, null, "/project", "target", false, nodeAttribites);
		
		
			// Insert child element for target unpublish
			nodeExpr = String.format(WindowsAzureConstants.PROJ_GLOBAL_TARGET, "unpublish");
			nodeAttribites.clear();
			nodeAttribites.put("cloudservicename", "${cloudservicename}");
			nodeAttribites.put("deploymentslot", "${deploymentslot}");
			nodeAttribites.put("publishsettingspath", "${publishsettingspath}");
			nodeAttribites.put("subscriptionid", "${subscriptionid}");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, null, nodeExpr, "azureunpublish", false, nodeAttribites);
			
			nodeAttribites.clear();
			nodeAttribites.put("name", "azureunpublish");
			nodeAttribites.put("classpathref", "build.classpath");
			nodeAttribites.put("classname", "com.microsoftopentechnologies.windowsazure.tools.build.AzureUnPublish");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, null, nodeExpr, "taskdef", true, nodeAttribites);

		}
		
		if (!ParserXMLUtility.doesNodeExists(packageFileDoc,
				String.format(WindowsAzureConstants.PROJ_GLOBAL_TARGET, "publishonly"))) {
			// Add publishonly target.
			nodeAttribites.clear();
			nodeAttribites.put("name", "publishonly");
			nodeAttribites.put("description", "Publish only (do not rebuild) Azure project to cloud");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, null, "/project", "target", false, nodeAttribites);

			// Insert child elements for target publishonly
			nodeExpr = String.format(WindowsAzureConstants.PROJ_GLOBAL_TARGET, "publishonly");
			nodeAttribites.clear();
			nodeAttribites.put("cloudservicename", "${cloudservicename}");
			nodeAttribites.put("deploymentslot", "${deploymentslot}");
			nodeAttribites.put("overwritepreviousdeployment", "${overwritepreviousdeployment}");
			nodeAttribites.put("projectdir", "${basedir}");
			nodeAttribites.put("publishsettingspath", "${publishsettingspath}");
			nodeAttribites.put("region", "${region}");
			nodeAttribites.put("storageaccountname", "${storageaccountname}");
			nodeAttribites.put("subscriptionid", "${subscriptionid}");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, null, nodeExpr, "azurepublish", false, nodeAttribites);

			nodeAttribites.clear();
			nodeAttribites.put("name", "azurepublish");
			nodeAttribites.put("classpathref", "build.classpath");
			nodeAttribites.put("classname", "com.microsoftopentechnologies.windowsazure.tools.build.AzurePublish");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, null, nodeExpr, "taskdef", true, nodeAttribites);
		}

		if (!ParserXMLUtility.doesNodeExists(packageFileDoc, "/project/path[@id='build.classpath']/fileset[@dir='${cspack.dir}']")) {
			// Insert element in build classpath
			nodeAttribites.clear();
			nodeAttribites.put("name", "*.jar");
			ParserXMLUtility.updateOrCreateElement(packageFileDoc, null, "/project/path[@id='build.classpath']/fileset[@dir='${cspack.dir}']", "include", true, nodeAttribites);
		}
	}
	
}
