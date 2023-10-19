// country.interface.ts

export interface Country {
  name: { common: string };
  capital: string[];
  region: string;
  flags: { png: string };
  // Add other properties as needed
}
