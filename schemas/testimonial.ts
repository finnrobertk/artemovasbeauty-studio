import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Anmeldelser',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Kundens navn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'review',
      title: 'Anmeldelse',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(300).error('Anmeldelsen kan ikke være lengre enn 300 tegn'),
    }),
    defineField({
      name: 'rating',
      title: 'Vurdering (1-5 stjerner)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'treatment',
      title: 'Behandling',
      type: 'reference',
      to: [{ type: 'treatment' }],
    }),
    defineField({
      name: 'image',
      title: 'Kundens bilde (valgfritt)',
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
      name: 'approved',
      title: 'Godkjent',
      type: 'boolean',
      description: 'Anmeldelsen er godkjent for publisering',
      initialValue: false,
    }),
    defineField({
      name: 'featured',
      title: 'Fremhevet',
      type: 'boolean',
      description: 'Vis denne anmeldelsen på forsiden',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publiseringsdato',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'review',
      rating: 'rating',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle, rating, media } = selection
      const stars = '★'.repeat(rating || 0) + '☆'.repeat(5 - (rating || 0))
      return {
        title,
        subtitle: `${stars} - ${subtitle ? subtitle.slice(0, 60) + '...' : ''}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Nyeste først',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Høyeste vurdering',
      name: 'ratingDesc',
      by: [{ field: 'rating', direction: 'desc' }],
    },
  ],
})
