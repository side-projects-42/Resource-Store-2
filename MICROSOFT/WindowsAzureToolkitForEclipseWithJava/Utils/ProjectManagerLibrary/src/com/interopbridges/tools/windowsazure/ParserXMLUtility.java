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

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Map;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;

final class ParserXMLUtility {

	private static final int BUFF_SIZE = 1024;

	private ParserXMLUtility() {

	}

	/**
	 * Parses XML file and returns XML document.
	 * 
	 * @param fileName
	 *            .
	 * @return XML document or <B>null</B> if error occurred
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	protected static Document parseXMLFile(final String fileName)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			DocumentBuilder docBuilder;
			Document doc = null;
			DocumentBuilderFactory docBuilderFactory = DocumentBuilderFactory
					.newInstance();
			docBuilderFactory.setIgnoringElementContentWhitespace(true);
			docBuilder = docBuilderFactory.newDocumentBuilder();
			File xmlFile = new File(fileName);
			doc = docBuilder.parse(xmlFile);
			return doc;
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_RETRIEVE_DATA + fileName, e);
		}

	}

	/**
	 * Parses Input Stream and returns XML document.
	 * 
	 * @param fileName
	 *            .
	 * @return XML document or <B>null</B> if error occurred
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	protected static Document parseXMLResource(final InputStream inputStream)
			throws WindowsAzureInvalidProjectOperationException {
		try {
			DocumentBuilder docBuilder;
			Document doc = null;
			DocumentBuilderFactory docBuilderFactory = DocumentBuilderFactory
					.newInstance();
			docBuilderFactory.setIgnoringElementContentWhitespace(true);
			docBuilder = docBuilderFactory.newDocumentBuilder();
			doc = docBuilder.parse(inputStream);
			return doc;
		} catch (Exception e) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_RETRIEVE_DATA, e);
		}

	}

	/**
	 * save XML file and saves XML document.
	 * 
	 * @param fileName
	 * @param doc
	 * @return XML document or <B>null</B> if error occurred
	 * @throws IOException
	 * @throws WindowsAzureInvalidProjectOperationException
	 */

	protected static boolean saveXMLFile(String fileName, Document doc)
			throws IOException, WindowsAzureInvalidProjectOperationException {
		File xmlFile = null;
		FileOutputStream fos = null;
		Transformer transformer;
		try {
			xmlFile = new File(fileName);
			fos = new FileOutputStream(xmlFile);
			TransformerFactory transFactory = TransformerFactory.newInstance();
			transformer = transFactory.newTransformer();
			DOMSource source = new DOMSource(doc);
			StreamResult destination = new StreamResult(fos);
			// transform source into result will do save
			transformer.setOutputProperty(OutputKeys.INDENT, "yes");
			transformer.setOutputProperty(
					"{http://xml.apache.org/xslt}indent-amount", "2");
			transformer.transform(source, destination);
		} catch (Exception excp) {
			throw new WindowsAzureInvalidProjectOperationException(
					WindowsAzureConstants.EXCP_SAVE + fileName, excp);
		} finally {
			if (fos != null) {
				fos.close();
			}
		}
		return true;
	}

	public static void copyDir(File source, final File destination)
			throws IOException, WindowsAzureInvalidProjectOperationException {

		InputStream instream = null;
		if (source.isDirectory()) {
			if (!destination.exists()) {
				destination.mkdirs();
			}
			String[] kid = source.list();
			for (int i = 0; i < kid.length; i++) {
				copyDir(new File(source, kid[i]), new File(destination, kid[i]));
			}
		} else {
			// InputStream instream = null;
			OutputStream out = null;
			try {
				instream = new FileInputStream(source);
				out = new FileOutputStream(destination);
				byte[] buf = new byte[BUFF_SIZE];
				int len = instream.read(buf);

				while (len > 0) {
					out.write(buf, 0, len);
					len = instream.read(buf);
				}
			} catch (Exception ex) {
				throw new WindowsAzureInvalidProjectOperationException(
						"Exception while copying dir", ex);

			} finally {
				if (instream != null) {
					instream.close();
				}
				if (out != null) {
					out.close();
				}
			}
		}
	}

	public static void writeFile(InputStream inStream, OutputStream out)
			throws IOException {
		try {
			byte[] buf = new byte[BUFF_SIZE];
			int len = inStream.read(buf);
			while (len > 0) {
				out.write(buf, 0, len);
				len = inStream.read(buf);
			}
		} finally {
			if (inStream != null) {
				inStream.close();
			}
			if (out != null) {
				out.close();
			}
		}

	}

	/** Generic API to delete elements from DOM */
	public static void deleteElement(Document doc, String expr)
			throws XPathExpressionException {
		if (doc == null) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		} else {
			XPath xPath = XPathFactory.newInstance().newXPath();
			Element element = (Element) xPath.evaluate(expr, doc,
					XPathConstants.NODE);

			if (element != null) {
				Node parentNode = element.getParentNode();
				parentNode.removeChild(element);
			}

		}
	}

	/** This API evaluates XPath expression and return the result as a String. */
	public static String getExpressionValue(Document doc, String expr)
			throws XPathExpressionException {
		if (doc == null || expr == null || expr.isEmpty())
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);

		XPath xPath = XPathFactory.newInstance().newXPath();
		return xPath.evaluate(expr, doc);
	}

	/** This API evaluates XPath expression and sets the value. */
	public static void setExpressionValue(Document doc, String expr,
			String value) throws XPathExpressionException {
		if (doc == null || expr == null || expr.isEmpty())
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);

		XPath xPath = XPathFactory.newInstance().newXPath();
		Node node = (Node) xPath.evaluate(expr, doc, XPathConstants.NODE);
		node.setNodeValue(value);
	}

	protected static boolean isEpPortEqualOrInRange(String oldPort,
			String newPort) {
		boolean isEqual = false;
		try {

			int oldMin, oldMax, newMin, newMax;
			if (oldPort.contains("-")) {
				String[] rang = oldPort.split("-");
				oldMin = Integer.valueOf(rang[0]);
				oldMax = Integer.valueOf(rang[1]);
			} else {
				oldMax = Integer.valueOf(oldPort);
				oldMin = Integer.valueOf(oldPort);
			}

			if (newPort.contains("-")) {
				String[] rang = newPort.split("-");
				newMin = Integer.valueOf(rang[0]);
				newMax = Integer.valueOf(rang[1]);
			} else {
				newMax = Integer.valueOf(newPort);
				newMin = Integer.valueOf(newPort);
			}

			// check for newmin range is in between old range
			if ((newMin == oldMin) || newMin == oldMax
					|| (newMin > oldMin && newMin < oldMax)) {
				isEqual = true;
			} else if ((newMax == oldMin) || newMax == oldMax
					|| (newMax > oldMin && newMax < oldMax)) {
				// check for newmax range is in between old range
				isEqual = true;
			} else if ((oldMin > newMin && oldMin < newMax)) {
				// check for oldnim should not be in new range i.e. check for
				// overlapping
				isEqual = true;
			} else if (oldMax > newMin && oldMax < newMax) {
				isEqual = true;
			}

		} catch (Exception e) {
			isEqual = false;
		}
		return isEqual;
	}

	protected static boolean isValidRange(String range) {
		boolean isValid = true;
		try {
			String[] ports = range.split("-");
			int min = Integer.parseInt(ports[0]);
			int max = Integer.parseInt(ports[1]);
			if (min > max) {
				isValid = false;
			}
		} catch (Exception e) {
			isValid = false;
		}
		return isValid;
	}

	/** Generic API to update or create DOM elements */
	public static Element updateOrCreateElement(Document doc, String expr,
			String parentNodeExpr, String elementName, boolean firstChild,
			Map<String, String> attributes)
			throws WindowsAzureInvalidProjectOperationException {

		if (doc == null) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		} else {
			try {
				XPath xPath = XPathFactory.newInstance().newXPath();
				Element element = null;
				if (expr != null)
					element = (Element) xPath.evaluate(expr, doc,
							XPathConstants.NODE);

				// If element doesn't exist create one
				if (element == null) {
					element = doc.createElement(elementName);
					Element parentElement = (Element) xPath.evaluate(
							parentNodeExpr, doc, XPathConstants.NODE);
					if (firstChild) {
						parentElement.insertBefore(
								element,
								parentElement != null ? parentElement
										.getFirstChild() : null);
					} else {
						parentElement.appendChild(element);
					}
				}

				if (attributes != null && !attributes.isEmpty()) {
					for (Map.Entry<String, String> attribute : attributes
							.entrySet()) {
						element.setAttribute(attribute.getKey(),
								attribute.getValue());
					}
				}
				return element;
			} catch (Exception e) {
				throw new WindowsAzureInvalidProjectOperationException(
						WindowsAzureConstants.EXCP_UPDATE_OR_CREATE_ELEMENT, e);
			}
		}
	}

	/** Generic API to update or create DOM elements */
	public static Element createElement(Document doc, String expr,
			Element parentElement, String elementName, boolean firstChild,
			Map<String, String> attributes)
			throws WindowsAzureInvalidProjectOperationException {

		if (doc == null) {
			throw new IllegalArgumentException(
					WindowsAzureConstants.INVALID_ARG);
		} else {
			try {
				XPath xPath = XPathFactory.newInstance().newXPath();
				Element element = null;
				if (expr != null)
					element = (Element) xPath.evaluate(expr, doc,
							XPathConstants.NODE);

				// If element doesn't exist create one
				if (element == null) {
					element = doc.createElement(elementName);
					if (firstChild) {
						parentElement.insertBefore(
								element,
								parentElement != null ? parentElement
										.getFirstChild() : null);
					} else {
						parentElement.appendChild(element);
					}
				}

				if (attributes != null && !attributes.isEmpty()) {
					for (Map.Entry<String, String> attribute : attributes
							.entrySet()) {
						element.setAttribute(attribute.getKey(),
								attribute.getValue());
					}
				}
				return element;
			} catch (Exception e) {
				throw new WindowsAzureInvalidProjectOperationException(
						WindowsAzureConstants.EXCP_UPDATE_OR_CREATE_ELEMENT, e);
			}
		}
	}
	
	/**
	 * API checks if a node is already present in the XML document
	 * @param doc
	 * @param nodeExpression
	 * @return
	 * @throws WindowsAzureInvalidProjectOperationException
	 */
	public static boolean doesNodeExists(Document doc, String nodeExpression) throws WindowsAzureInvalidProjectOperationException {
		if (nodeExpression == null ) {
			throw new IllegalArgumentException(WindowsAzureConstants.INVALID_ARG);
		} else {
			try {
				XPath xPath = XPathFactory.newInstance().newXPath();
				Element element = (Element) xPath.evaluate(nodeExpression, doc, XPathConstants.NODE);
	
				// If element doesn't exist create one
				if (element == null) {
					return false;
				} else {
					return true;
				}
			} catch (Exception e) {
				throw new WindowsAzureInvalidProjectOperationException(WindowsAzureConstants.EXCP_NODE_EXISTS_CHECK, e);
			}
		}
		
	}

}
