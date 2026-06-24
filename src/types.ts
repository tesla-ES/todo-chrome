export interface PlanStep {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  details: string[];
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'setup' | 'ui' | 'scraping' | 'database' | 'integration';
}

export interface CodeFile {
  name: string;
  language: string;
  path: string;
  description: string;
  descriptionEn: string;
  code: string;
}

export interface ArchitectureNode {
  id: string;
  title: string;
  titleEn: string;
  type: 'extension' | 'backend' | 'storage' | 'web';
  description: string;
  descriptionEn: string;
  details: string[];
}
