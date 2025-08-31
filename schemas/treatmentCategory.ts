import { defineField, defineType } from 'sanity'

export const treatmentCategory = defineType({
  name: 'treatmentCategory',
  title: 'Behandlingskategori',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Kategorinavn',
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
      name: 'image',
      title: 'Bilde',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt-tekst' },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Kort beskrivelse',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'hasSubcategories',
      title: 'Har underkategorier',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      slug: 'slug.current',
    },
    prepare(selection) {
      const { title, media, slug } = selection
      return {
        title,
        subtitle: slug ? `/${slug}` : undefined,
        media,
      }
    },
  },
})
