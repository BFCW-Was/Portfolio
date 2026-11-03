// Lenguajes permitidos (valor -> etiqueta visible)
export const CODE_LANGUAGES = {
    // Front-End
    html: 'HTML',
    css: 'CSS',
    scss: 'SCSS',
    javascript: 'JavaScript',
    typescript: 'TypeScript',

    // Back-End
    python: 'Python',
    java: 'Java',
    php: 'PHP',
    csharp: 'C#',
    cpp: 'C++',
    rust: 'Rust',

    // Bases de datos
    sql: 'SQL',

    // Mobile
    dart: 'Dart',
    swift: 'Swift',
    kotlin: 'Kotlin',

    // CMD
    bash: 'Bash',
    powershell: 'PowerShell',
    batch: 'Batch',

    // Configuración, DevOps y otros
    markdown: 'Markdown',
    dockerfile: 'Dockerfile',
    yaml: 'YAML',
    dotenv: '.env',
    json: 'JSON',
    xml: 'XML',
    plaintext: 'Text',
} as const;

export type CodeLanguage = keyof typeof CODE_LANGUAGES;

export interface CodeFile {
    name: string;
    language: CodeLanguage;
    code: string;
}

export const isCodeLanguage = (value: unknown): value is CodeLanguage => typeof value === 'string' && Object.hasOwn(CODE_LANGUAGES, value);
