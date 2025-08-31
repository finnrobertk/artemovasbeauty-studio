import { defineField, defineType } from 'sanity'

export const treatmentSubcategory = defineType({
  name: 'treatmentSubcategory',
  title: 'Behandlings underkategori',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Underkategori navn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL-slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Hovedkategori',
      type: 'reference',
      to: [{ type: 'treatmentCategory' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Bilde',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt-tekst' },
      ],
    }),
    defineField({
      name: 'treatment',
      title: 'Tilknyttet behandling (vises ved klikk)',
      type: 'reference',
      to: [{ type: 'treatment' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      categoryTitle: 'category.title',
    },
    prepare(selection) {
      const { title, media, categoryTitle } = selection
      return {
        title,
        subtitle: categoryTitle ? `${categoryTitle}` : undefined,
        media,
      }
    },
  },
})
