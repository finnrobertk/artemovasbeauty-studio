import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Tjenester',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tjenestenavn',
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
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'longDescription',
      title: 'Detaljert beskrivelse',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image',
      title: 'Bilde',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt-tekst',
        },
      ],
    }),
    defineField({
      name: 'price',
      title: 'Pris (NOK)',
      type: 'number',
      description: 'Pris i norske kroner',
      validation: (Rule) => Rule.min(0).error('Prisen må være 0 eller høyere'),
    }),
    defineField({
      name: 'duration',
      title: 'Varighet (minutter)',
      type: 'number',
      description: 'Forventet varighet i minutter',
      validation: (Rule) => Rule.min(0).error('Varigheten må være 0 eller høyere'),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Vipper', value: 'vipper' },
          { title: 'PMU', value: 'pmu' },
          { title: 'Laminering', value: 'laminering' },
          { title: 'Hudpleie', value: 'hudpleie' },
          { title: 'Annet', value: 'annet' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Fremhevet tjeneste',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Sorteringsrekkefølge',
      type: 'number',
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      price: 'price',
      category: 'category',
    },
    prepare(selection) {
      const { title, media, price, category } = selection
      return {
        title,
        subtitle: `${category ? category.toUpperCase() : ''} ${price ? `- ${price} NOK` : ''}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Sorteringsrekkefølge',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Navn A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
