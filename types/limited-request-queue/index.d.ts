// Type definitions for limited-request-queue 3.0
// Project: https://github.com/stevenvachon/limited-request-queue#readme
// Definitions by: Gordon Burgett <https://github.com/gburgett>
//                 Justin Powell <https://github.com/jpowell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events'

export = RequestQueue;

interface Options {
    ignorePorts: boolean,
    ignoreProtocols: boolean,
    ignoreSubdomains: boolean,
    maxSockets: number,
    maxSocketsPerHost: number,
    rateLimit: number
}

declare class RequestQueue extends EventEmitter {
    /** Socket counts stored by host */
    activeHosts: object
    /** Items stored by ID */
    items: {
        [id: number]: { active: boolean, data: any, hostKey: any, id: number, options: Options, url: URL}
    }
    /** List of IDs */
    priorityQueue: number[]

    activeSockets: number
    counter: number
    options: Options
    paused: boolean


    isPaused(): boolean
    length(): number
    numActive(): number
    numQueued(): number

    constructor(options?: Partial<Options>)

    dequeue(id: number): boolean
    enqueue(url: URL, data: any, options: Partial<Options>): number

    pause(): this
    resume(): this

    on<E extends keyof events>(type: E, listener: (...args: events[E]) => void): this
    once<E extends keyof events>(type: E, listener: (...args: events[E]) => void): this
}

interface events {
    'end': []
    'item': [URL, any, () => void]
}

// https://github.com/stevenvachon/isurl#readme
interface URL {
    href: string
    protocol: string
    username: string
    password: string
    hostname: string
    port: string
    host: string
    pathname: string
    search: string
    hash: string
    searchParams: object
    toString(): string
}