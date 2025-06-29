/**
 * Humanable - Deepractice Humanable Prompt Framework
 * A revolutionary AI humanization cognitive architecture
 * 
 * @author Deepractice Team
 * @license MIT
 */

const fs = require('fs');
const path = require('path');

/**
 * Humanable Core Module
 */
class Humanable {
  constructor() {
    this.version = require('./package.json').version;
    this.name = 'Humanable';
    this.description = 'Deepractice Humanable Prompt Framework';
  }

  /**
   * Get Humanable framework description
   */
  getConcept() {
    return {
      name: 'Humanable',
      fullName: 'Deepractice Humanable Prompt Framework',
      description: 'A revolutionary AI humanization cognitive architecture that empowers AI with humanized thinking capabilities.',
      coreComponents: [
        'Role - Controller: System entry and dispatch center',
        'Personality - Hash: Thinking capability enumeration table', 
        'Principle - Orchestrator: Orchestration scheduler',
        'Knowledge - Pool: Information reference pool'
      ]
    };
  }

  /**
   * Get whitepaper content
   */
  getWhitepaper(language = 'en') {
    const filename = language === 'zh' ? 'whitepaper.md' : 'whitepaper_en.md';
    const whitepaperPath = path.join(__dirname, filename);
    
    try {
      return fs.readFileSync(whitepaperPath, 'utf8');
    } catch (error) {
      return `Whitepaper not found. Please visit: https://github.com/Deepractice/Humanable`;
    }
  }

  /**
   * Create a Humanable-compliant role structure
   */
  createRole(config) {
    const { name, personality, principle, knowledge, description } = config;
    
    return {
      name: name,
      description: description || 'A Humanable AI role',
      structure: {
        role: {
          personality: personality || ['exploration', 'reasoning'],
          principle: principle || ['orchestration-rules'],
          knowledge: knowledge || ['domain-expertise']
        }
      },
      architecture: 'Controller-Hash-Orchestrator-Pool',
      framework: 'Humanable'
    };
  }

  /**
   * Validate Humanable role structure
   */
  validateRole(role) {
    const required = ['name', 'structure'];
    const structureRequired = ['role'];
    const roleRequired = ['personality', 'principle', 'knowledge'];
    
    if (!required.every(key => key in role)) {
      return { valid: false, error: 'Missing required top-level properties' };
    }
    
    if (!structureRequired.every(key => key in role.structure)) {
      return { valid: false, error: 'Missing role structure' };
    }
    
    if (!roleRequired.every(key => key in role.structure.role)) {
      return { valid: false, error: 'Missing role components (personality, principle, knowledge)' };
    }
    
    return { valid: true };
  }

  /**
   * Get thinking orchestration patterns
   */
  getOrchestrationPatterns() {
    return {
      basic: {
        exploration: 'Divergent thinking for creative solutions',
        reasoning: 'Logical analysis and deduction',
        challenge: 'Critical evaluation and questioning',
        plan: 'Strategic planning and execution'
      },
      advanced: {
        remember: 'Information storage and retention',
        recall: 'Information retrieval and application',
        synthesize: 'Integration of multiple thinking modes',
        adapt: 'Dynamic adjustment based on context'
      }
    };
  }

  /**
   * Generate role template
   */
  generateRoleTemplate(roleType = 'basic') {
    const templates = {
      basic: {
        personality: ['@!thought://exploration', '@!thought://reasoning'],
        principle: ['@!execution://orchestration-rules'],
        knowledge: ['@!knowledge://domain-expertise']
      },
      advanced: {
        personality: [
          '@!thought://exploration',
          '@!thought://reasoning', 
          '@!thought://challenge',
          '@!thought://plan',
          '@!thought://remember',
          '@!thought://recall'
        ],
        principle: [
          '@!execution://situational-dispatch',
          '@!execution://thinking-orchestration',
          '@!execution://quality-control'
        ],
        knowledge: [
          '@!knowledge://professional-domain',
          '@!knowledge://tool-usage',
          '@!knowledge://best-practices'
        ]
      }
    };

    return templates[roleType] || templates.basic;
  }
}

// Export the main class and utility functions
module.exports = {
  Humanable,
  createRole: (config) => new Humanable().createRole(config),
  validateRole: (role) => new Humanable().validateRole(role),
  getConcept: () => new Humanable().getConcept(),
  getOrchestrationPatterns: () => new Humanable().getOrchestrationPatterns(),
  generateRoleTemplate: (type) => new Humanable().generateRoleTemplate(type)
};

// Default export for ES6 imports
module.exports.default = Humanable; 