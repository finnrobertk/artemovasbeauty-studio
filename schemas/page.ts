import { defineField, defineType } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Sider',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sidetittel',
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
      name: 'metaTitle',
      title: 'SEO-tittel',
      type: 'string',
      description: 'Tittel som vises i søkemotorer (maks 60 tegn)',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO-beskrivelse',
      type: 'text',
      description: 'Beskrivelse som vises i søkemotorer (maks 160 tegn)',
      rows: 3,
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero-bilde',
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
      name: 'heroTitle',
      title: 'Hero-tittel',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero-undertittel',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'content',
      title: 'Innhold',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt-tekst',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Bildetekst',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'showServices',
      title: 'Vis tjenester på siden',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'showTestimonials',
      title: 'Vis anmeldelser på siden',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'published',
      title: 'Publisert',
      type: 'boolean',
      description: 'Er denne siden publisert og synlig for besøkende?',
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
      title: 'title',
      media: 'heroImage',
      slug: 'slug.current',
    },
    prepare(selection) {
      const { title, media, slug } = selection
      return {
        title,
        subtitle: slug ? `/${slug}` : 'Ingen URL',
        media,
      }
    },
  },
})
