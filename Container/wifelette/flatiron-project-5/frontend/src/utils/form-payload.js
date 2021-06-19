/**
 * This function takes the data that comes out of my form, and converts it into the precise data structure JSON:API wants. It's complicated and I had help from a senior developer who had this code on hand in their personal library. It makes it easy for me to get the data out of my forms. I documented it all when I first learned how it worked...but I'm not even sure I could explain it all well again now several weeks later :p
 *
 * @param {FormData} formData
 */
export function payloadForFormData(formData) {
  /** @type {{ [key: string]: string }} */
  let attributes = {};

  // This will look like: { activities: { data: [{ type: "activities", "id": "1"}, ...] } }
  /** @type {{ [key: string]: { data: { type: string, id: string, method?: 'disassociate' }[] } }} */
  let relationships = {};

  // Set is a built-in JS class that takes an iterable and returns a set (array) of just the unique values.
  let uniqueFieldNames = new Set(formData.keys());

  // Iterate over the list of field names from our FormData
  for (let fieldName of uniqueFieldNames) {
    // If the field name ends with `[]`, it's a has-many relationship
    let relationship = fieldName.endsWith("[]");
    // If the field name ends with `[disassociate]`, it's a disassociate request
    let disassociate = fieldName.endsWith("[disassociate]");

    // If it's a has-many relationship...
    if (relationship) {
      // The value for each field with this name will be an ID. Use getAll to get an array of all of the IDs
      let ids = formData.getAll(fieldName);

      // Remove the `[]` from the end of the field name to get the relationship name (I only added them in the first place so I could tell the difference)
      let relationshipName = fieldName.slice(0, -2);

      // Insert an entry into the relationships object
      relationships[relationshipName] = {
        // map the IDs into something like `{ type: "activities", "id": "1" }`
        data: ids.map((id) => {
          return { type: relationshipName, id: String(id) };
        }),
      };
    } else if (disassociate) {
      // The value for each field with this name will be an ID. Use getAll to get an array of all of the IDs
      let ids = formData.getAll(fieldName);

      // Remove the `[disassociate]` from the field name
      let relationshipName = fieldName.slice(0, -14);

      // Insert an entry into the relationships object
      relationships[relationshipName] = {
        data: ids.map((id) => {
          // map the IDs into something like `{ type: "activities", "id": "1", "method": "disassociate" }`
          return {
            type: relationshipName,
            id: String(id),
            method: "disassociate",
          };
        }),
      };
    } else {
      // If the field name doesn't end with `[]`, it's not a relationship, so use `get` to get the value from the form
      attributes[fieldName] = String(formData.get(fieldName));
    }
  }

  // Because we're using JSON:API, the POST format has to be the same as the format we get back—hence the `data` container
  return {
    data: {
      attributes,
      relationships,
    },
  };
}
