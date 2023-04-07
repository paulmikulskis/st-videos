# Integrating Supertokens with NextJS 13

## Objective
The objective of this video is to showcase how to integrate Supertokens front end with NextJS 13 by adapting the existing integration steps as shown in the Supertokens documentation.

There are several *critical* steps that must be changed from the existing NextJS 12 integration steps
to accomodate the new NextJS 13 spec.
This will require re-assesing how certain functions are named and placed, and potentailly even changing some implementation details.  This video will serve as a strong guide to fill in this growing space.

## Tone
Medium technical difficulty, tutorial style, informative.

## Outline
- Intro (1-3 minutes)
    - Brief overview of Supertokens
    - Introduction to the value of integrating Supertokens with NextJS 13
- Installation and configuration (2-4 minutes)
    - Install the Supertokens package
    - Create configuration files
- Create frontend and backend config functions (2-4 minutes)
    - Create the frontend config function
    - Create the backend config function
- Call frontend init functions and wrap with SuperTokensWrapper component (2-4 minutes)
    - Replacing the `_app.tsx` file
    - Call the frontend init functions
    - Wrap the functions with `<SuperTokensWrapper>` component
- Outro (1-2 minutes)
    - Recap of the integration steps
    - Encouragement to explore Supertokens further

## Target Audience
The target audience for this video is web developers, particularly those using NextJS 13 and interested in integrating Supertokens into their web applications.

This video is intended to be Supertokens-specific, and can be placed on the website due to the extremely high search volume for NextJS 13 specifically.  
