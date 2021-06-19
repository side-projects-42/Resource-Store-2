import { payloadForFormData } from "./form-payload";

/**
 * This is a "utility function" to fetch a URL as JSON
 * without always needing to await `response.json()`.
 *
 * @template T
 * @param {string} url
 * @returns {Promise<T>}
 */
export async function getJSON(url) {
  // I'm awaiting the result of calling fetch, but fetch is itself returning a promise. Fetch is built-in.
  let response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  // 2XX is the range of successful responses we expect from a GET request, so if we get anything different, we'll throw an error so we notice.
  if (response.status < 200 || response.status >= 300) {
    throw new Error(
      `Fetching ${url} didn't work (status=${response.status}). Consult the network pane for more information.`
    );
  }

  return response.json(); // This is also a promise
}

// This is the guts of the fetch-DELETE request we're going to use in various components to interact with the Rails controller.

/**
 * @param {string} url
 * @returns {Promise<void>}
 */
export async function destroy(url) {
  let response = await fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  if (response.status !== 204) {
    throw new Error(
      `Destroying ${url} didn't work (status=${response.status}). Consult the network pane for more information.`
    );
  }
}

// This is the guts of the fetch-POST request we're going to use in various components to interact with the Rails controller.

/**
 * @template T
 * @param {string} url
 * @param {FormData} formData
 * @returns {Promise<T>}
 */
export async function create(url, formData) {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payloadForFormData(formData)),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (response.status !== 201) {
    throw new Error(
      `Creating ${url} didn't work (status=${response.status}). Consult the network pane for more information.`
    );
  }

  return response.json();
}

// This is the guts of the fetch-PATCH request we're going to use in various components to interact with the Rails controller.

/**
 *
 * @param {string} url
 * @param {FormData} formData
 * @returns {Promise<void>}
 */
export async function update(url, formData) {
  let response = await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(payloadForFormData(formData)),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (response.status < 200 || response.status >= 300) {
    throw new Error(
      `Updating ${url} didn't work (status=${response.status}). Consult the network pane for more information.`
    );
  }
}
