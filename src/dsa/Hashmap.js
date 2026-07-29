// src/dsa/Hashmap.js

export default class HashMap {
  constructor() {
    this.map = new Map();
  }

  // Insert a word or phrase
  insert(key, value = true) {
    this.map.set(key.toLowerCase(), value);
  }

  // Check if a key exists
  contains(key) {
    return this.map.has(key.toLowerCase());
  }

  // Get stored value
  get(key) {
    return this.map.get(key.toLowerCase());
  }

  // Remove a key
  remove(key) {
    this.map.delete(key.toLowerCase());
  }

  // Number of entries
  size() {
    return this.map.size;
  }

  // Return all keys
  keys() {
    return [...this.map.keys()];
  }

  // Return all values
  values() {
    return [...this.map.values()];
  }

  // Clear hashmap
  clear() {
    this.map.clear();
  }
}
