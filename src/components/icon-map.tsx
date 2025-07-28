import { GitHubLogoIcon, TwitterLogoIcon, DiscordLogoIcon, LinkedInLogoIcon, InstagramLogoIcon, GlobeIcon, VideoIcon } from "@radix-ui/react-icons";
import { FaMedium } from "react-icons/fa";
import { Mail } from 'lucide-react'

export const IconMap = {
  github: <GitHubLogoIcon />,
  twitter: <TwitterLogoIcon />,
  medium: <FaMedium />,
  linkedin: <LinkedInLogoIcon />,
  instagram: <InstagramLogoIcon />,
  website: <GlobeIcon />,
  youtube: <VideoIcon />,
  mail: <Mail size={16} />
}