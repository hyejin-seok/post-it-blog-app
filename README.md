# Post-it Blog Application

## Table of contents

- Description
- Features
- Technologies Used
- Setup Instructions
- Contributor

## Description

This application allows users to create, read, update, and delete (CRUD) short post-it style notes and image posts. Users can also bookmark their favorite posts and images. <br/><br/>
The app is built with Next.js and TypeScript, styled with Tailwind CSS, and uses Cloudinary for image storage. Next Auth is used to ensure secure user authentication, while React Dropzone provides a user-friendly drag-and-drop interface for image uploads. PostgreSQL is used as the primary database for efficient data management.<br /><br />
< Test Account > <br />
Username: testuser <br />
Password: password
<br/><br/>
[ Posts Blog Page ]
<img width="1423" alt="blog-1" src="https://github.com/hyejin-seok/post-it-blog-app/assets/132785671/cf6dc344-7fde-4df8-bae0-213995cfb202">
<br/><br/>
[ Uploading Images Page ]
<img width="1431" alt="blog-2" src="https://github.com/hyejin-seok/post-it-blog-app/assets/132785671/79efef98-9e79-46d8-a397-eb154a3ed2cf">
<br/><br/>
[ Images Blog Page ]
<img width="1430" alt="blog-3" src="https://github.com/hyejin-seok/post-it-blog-app/assets/132785671/42d5a7ae-78da-4c6b-b515-b291f93c0779">


## Features

- **Post-It Style Notes Blog**: <br/>
  &nbsp;Users can create, read, update, delete, and bookmark post-it style notes. <br />
- **Image Blog**: <br/>
  &nbsp;Users can upload images, manage them, and bookmark their favorite images. Images can be uploaded via drag-and-drop or by selecting files. <br />
- **Authentication**: <br/>
  &nbsp;Users can sign up, log in, and log out.
- **Database Management**: <br/>
  &nbsp;PostgreSQL is used as the primary database, providing robust and efficient data management.
- **Cloudinary Integration**: <br/>
  &nbsp;Uploaded images are stored securely using Cloudinary's cloud service. <br />
- **Contact Page**: <br/>
  &nbsp;Users can send messages directly to the blog team through a simple, user-friendly form.

## Technologies Used

- Next.js
- PostgreSQL
- TypeScript
- Tailwind CSS
- Cloudinary
- Next Auth
- React Dropzone

## Setup Instructions

1. Clone the repository to your local machine.
2. Install dependencies using npm or yarn: `npm install` or `yarn install`.
3. Set up environment variables: Create .env.local file in the root of your project and add the following environment variables:

```
DATABASE_URL=

CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
CLOUDIANRY_API_SECRET=

NEXTAUTH_SECRET=
GITHUB_SECRET=
GITHUB_ID=
```

5. Start the development server: `npm start` or `yarn start`.
6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Author

🌻 [Hyejin](https://github.com/hyejin-seok)
