// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface Actions {
    block_num:     number;
    block_id:      string;
    action_num:    number;
    trx_id:        string;
    cfa:           boolean;
    account:       string;
    name:          string;
    authorization: Authorization[];
    data:          any;
}

export interface Authorization {
    actor:      string;
    permission: string;
}