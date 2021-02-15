export interface Option {
    optionId: string;
    optionDesc: string;
}

export interface Question {
    questionId?: number;
    questionDesc?: string;
    options?: Option[];
}

export interface Quiz {
    questions: Question[];
} 