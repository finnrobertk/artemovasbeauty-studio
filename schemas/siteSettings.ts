import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Nettstedinnstillinger',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nettstedstittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Nettstedbeskrivelse',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
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
      name: 'contactInfo',
      title: 'Kontaktinformasjon',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Telefonnummer',
          type: 'string',
        },
        defineField({
          name: 'email',
          title: 'E-post',
          type: 'string',
          validation: (Rule) => Rule.email().error('Vennligst skriv inn en gyldig e-postadresse'),
        }),
        {
          name: 'address',
          title: 'Adresse',
          type: 'text',
          rows: 2,
        },
        {
          name: 'googleMapsUrl',
          title: 'Google Maps lenke',
          type: 'url',
          description: 'Lenke til Google Maps for å vise lokasjon',
        },
        {
          name: 'openingHours',
          title: 'Åpningstider',
          type: 'text',
          rows: 4,
        },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Sosiale medier',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        },
        {
          name: 'tiktok',
          title: 'TikTok URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'bookingSettings',
      title: 'Bookinginnstillinger',
      type: 'object',
      fields: [
        {
          name: 'bookingUrl',
          title: 'Booking URL',
          type: 'url',
          description: 'Link til booking-system (f.eks. Timma, BookingBoss)',
        },
        {
          name: 'bookingPhone',
          title: 'Booking telefon',
          type: 'string',
        },
        {
          name: 'bookingEmail',
          title: 'Booking e-post',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO-innstillinger',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Standard SEO-tittel',
          type: 'string',
          validation: (Rule) => Rule.max(60),
        },
        {
          name: 'metaDescription',
          title: 'Standard SEO-beskrivelse',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160),
        },
        {
          name: 'ogImage',
          title: 'Standard delebilde',
          type: 'image',
          description: 'Bilde som vises når siden deles på sosiale medier',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
})
