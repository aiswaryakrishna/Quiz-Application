export interface questionDataInterface {
    question: string;
    options: Array<string>;
    type: string;
    userResponse: any;
    answer: any;
}

export interface scoreInfoInterface {
    submitValue: boolean;
    score: number;
}