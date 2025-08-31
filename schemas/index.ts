import { treatment } from './treatment'
import { testimonial } from './testimonial'
import { page } from './page'
import { siteSettings } from './siteSettings'
import { treatmentCategory } from './treatmentCategory'
import { treatmentSubcategory } from './treatmentSubcategory'

export const schemaTypes = [
  // Content types
  treatmentCategory,
  treatmentSubcategory,
  treatment,
  testimonial,
  page,
  
  // Settings
  siteSettings,
]
