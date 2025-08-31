import { defineField, defineType } from 'sanity'

export const treatment = defineType({
  name: 'treatment',
  title: 'Behandlinger',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Behandlingsnavn',
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
      title: 'Hovedkategori (valgfritt)',
      type: 'reference',
      to: [{ type: 'treatmentCategory' }],
    }),
    defineField({
      name: 'description',
      title: 'Kort beskrivelse',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'content',
      title: 'Innhold',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'beforeCare',
      title: 'Før-behandling',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Hva kunden må gjøre før behandlingen',
    }),
    defineField({
      name: 'beforeImage',
      title: 'Før-bilde',
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
      name: 'afterImage',
      title: 'Etter-bilde',
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
      name: 'priceFrom',
      title: 'Pris fra (NOK)',
      type: 'number',
      validation: (Rule) => Rule.min(0).error('Prisen må være 0 eller høyere'),
    }),
    defineField({
      name: 'duration',
      title: 'Varighet',
      type: 'string',
      description: 'F.eks. "60–90 minutter"',
    }),
    defineField({
      name: 'aftercare',
      title: 'Etterbehandling',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Instruksjoner for etterbehandling',
    }),
    defineField({
      name: 'featured',
      title: 'Fremhevet behandling',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      categoryTitle: 'category.title',
      media: 'afterImage',
      priceFrom: 'priceFrom',
      duration: 'duration',
    },
    prepare(selection) {
      const { title, categoryTitle, media, priceFrom, duration } = selection as any
      const parts = [categoryTitle, duration, priceFrom ? `${priceFrom} NOK+` : undefined].filter(Boolean)
      return {
        title,
        subtitle: parts.join(' • '),
        media,
      }
    },
  },
})
