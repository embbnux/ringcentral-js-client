// Generated Source

interface ActiveCallInfoWithoutSip {

    /**
     * Internal identifier of a call
     */
    id?: string;

    /**
     * Call direction
     */
    direction?: "Inbound" | "Outbound";

    /**
     * Phone number or extension number of a caller
     */
    from?: string;

    /**
     * Name of a caller
     */
    fromName?: string;

    /**
     * Phone number or extension number of a callee
     */
    to?: string;

    /**
     * Name of a callee
     */
    toName?: string;

    /**
     * Time when the call is actually started
     */
    startTime?: string;

    /**
     * Telephony call status
     */
    telephonyStatus?: "NoCall" | "CallConnected" | "Ringing" | "OnHold" | "ParkedCall";

    /**
     * Internal identifier of a call session
     */
    sessionId?: string;

    /**
     * Type of call termination. Supported for calls in 'NoCall' status. If the returned termination type is 'intermediate' it means the call is not actually ended, the connection is established on one of the devices
     */
    terminationType?: "final" | "intermediate";
}

export default ActiveCallInfoWithoutSip;
