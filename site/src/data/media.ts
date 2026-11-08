// Image allowlist (plan 5.7). New pages use only these paths. No images of minors until D5.
export const media = {
  originalLogo: { src: '/live_site_content/assets/logo.png', alt: 'Original United Wrestling Club circular logo with wrestlers' },
  naweedHeadshot: { src: '/video_assets/stills_selected/still_31_naweed_headshot_united_wall.jpg', alt: 'Head Wrestling Coach Naweed Zemaryalai under the United Wrestling Club wall in Hayward' },
  naweedMatCommand: { src: '/video_assets/stills_selected/still_44_coach_naweed_mat_command_uwc_banner.jpg', alt: 'Coach Naweed directing mat practice under United Wrestling Club banner in Hayward' },
  sergioGomezStriking: { src: '/video_assets/stills_selected/still_49_sergio_gomez_striking_usa_wrestling_olympic_banner.jpg', alt: 'Coach Farid Siddiq coaching combat striking mechanics under the USA Wrestling banner' },
  coFounder: { src: '/live_site_content/assets/co-founder.jpg', alt: 'Coach Rashad Rahimi, UWC Co-Founder' },
  programAdult: { src: '/video_assets/cards/program-adult.jpg', alt: 'Two adult grapplers in a collar tie during a UWC adult class' },
} as const;
export const allowedImagePaths: string[] = Object.values(media).map((m) => m.src);
