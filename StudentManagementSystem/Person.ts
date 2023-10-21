export interface Person {

    getName(): string;
    getAge(): number;
    getGender(): "Male" | "Female";

    setName(name: string): void;
    setAge(age: number): void;
    setGender(sex: "Male" | "Female"): void;

    checkName(name: string): boolean;
    checkAge(age: number): boolean;
    checkGender(sex: "Male" | "Female"): boolean;

}

