import { defineField, defineType } from 'sanity';
import { author } from './author';
import { category } from './category';

const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'The title of the post',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      description: 'The author of the post',
      title: 'Author',
      type: 'reference',
      to: [author],
    }),
    defineField({
      name: 'slug',
      description: 'The slug of the post',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      description: 'The categories of the post',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [category],
        },
      ],
    }),
    defineField({
      name: 'mainImage',
      description: 'The main image of the post',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      description: 'The body of the post',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      description: 'The published date of the post',
      title: 'Published At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
    }),
  ],
});

export { post };
