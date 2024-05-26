import caniuseIndex from "./index/caniuse.js";
import booksIndex from "./index/books.js";
import commandsIndex from "./index/commands.js";
import labelsIndex from "./index/labels.js";
import lintsIndex from "./index/lints.js";
import rfcsIndex from "./index/rfcs.js";
import rustcIndex from "./index/rustc.js";
import targetsIndex from "./index/targets.js";
import searchIndex from "./index/std-docs.js";
import { mapping, crateIndex } from "./index/crates.js";
import storage from "./core/storage.js";

// Query all storage by this method:
// chrome.storage.local.get(null, function(result) {
//     console.log('Value currently is ', result);
// });

export default class IndexManager {
    static async getStdStableIndex() {
        // Convert default map searchIndex to Object since rust 1.76.0
        return await storage.getItem('index-std-stable') || Object.fromEntries(searchIndex);
    }

    static setStdStableIndex(index) {
        storage.setItem('index-std-stable', index);
    }

    static async getStdNightlyIndex() {
        // Convert default map searchIndex to Object since rust 1.76.0
        return await storage.getItem('index-std-nightly') || Object.fromEntries(searchIndex);
    }

    static setStdNightlyIndex(index) {
        storage.setItem('index-std-nightly', index);
    }

    static async getBookIndex() {
        return await storage.getItem('index-book') || booksIndex;
    }

    static setBookIndex(index) {
        storage.setItem('index-book', index);
    }

    static async getLabelIndex() {
        return await storage.getItem('index-label') || labelsIndex;
    }

    static setLabelIndex(index) {
        storage.setItem('index-label', index);
    }

    static async getRfcIndex() {
        return await storage.getItem('index-rfc') || rfcsIndex;
    }

    static setRfcIndex(index) {
        storage.setItem('index-rfc', index);
    }

    static async getCrateMapping() {
        return await storage.getItem('index-crate-mapping') || mapping;
    }

    static setCrateMapping(index) {
        storage.setItem('index-crate-mapping', index);
    }

    static async getCrateIndex() {
        return await storage.getItem('index-crate') || crateIndex;
    }

    static setCrateIndex(index) {
        storage.setItem('index-crate', index);
    }

    static async getLintIndex() {
        return await storage.getItem('index-lint') || lintsIndex;
    }

    static setLintIndex(index) {
        storage.setItem('index-lint', index);
    }

    static async getCaniuseIndex() {
        return await storage.getItem('index-caniuse') || caniuseIndex;
    }

    static setCaniuseIndex(index) {
        storage.setItem('index-caniuse', index);
    }

    static async getRustcIndex() {
        return await storage.getItem('index-rustc') || rustcIndex;
    }

    static setRustcIndex(index) {
        storage.setItem('index-rustc', index);
    }

    static async getTargetIndex() {
        return await storage.getItem('index-target') || targetsIndex;
    }

    static setTargetIndex(index) {
        storage.setItem('index-target', index);
    }

    static async getCommandIndex() {
        let index = await storage.getItem('index-command');
        if (index) {
            // commandsIndex would update if the new version installed.
            // So we should override the old cache one.
            if (Object.keys(index).length < Object.keys(commandsIndex).length) {
                this.setCommandIndex(commandsIndex);
                return commandsIndex;
            }
            return index;
        }
        return commandsIndex;
    }

    static setCommandIndex(index) {
        storage.setItem('index-command', index);
    }

    static updateAllIndex() {
        IndexManager.setBookIndex(booksIndex);
        IndexManager.setCaniuseIndex(caniuseIndex);
        IndexManager.setCommandIndex(commandsIndex);
        IndexManager.setCrateIndex(crateIndex);
        IndexManager.setCrateMapping(mapping);
        IndexManager.setLabelIndex(labelsIndex);
        IndexManager.setLintIndex(lintsIndex);
        IndexManager.setRfcIndex(rfcsIndex);
        IndexManager.setRustcIndex(rustcIndex);
        IndexManager.setStdStableIndex(searchIndex);
        IndexManager.setTargetIndex(targetsIndex);
    }
};