/* tslint:disable */
/* eslint-disable */
/**
 * To-Do List API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TodoOut
 */
export interface TodoOut {
    /**
     * 
     * @type {string}
     * @memberof TodoOut
     */
    title: string;
    /**
     * 
     * @type {boolean}
     * @memberof TodoOut
     */
    completed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TodoOut
     */
    id: number;
}

/**
 * Check if a given object implements the TodoOut interface.
 */
export function instanceOfTodoOut(value: object): value is TodoOut {
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function TodoOutFromJSON(json: any): TodoOut {
    return TodoOutFromJSONTyped(json, false);
}

export function TodoOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TodoOut {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'completed': json['completed'] == null ? undefined : json['completed'],
        'id': json['id'],
    };
}

export function TodoOutToJSON(json: any): TodoOut {
    return TodoOutToJSONTyped(json, false);
}

export function TodoOutToJSONTyped(value?: TodoOut | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
        'completed': value['completed'],
        'id': value['id'],
    };
}

