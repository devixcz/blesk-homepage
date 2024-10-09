import {BaseBanner, BaseBannerProps, BannerDimensions} from '@components/Banners/BaseBanner';

interface BannerProps extends BaseBannerProps {
    variant: string,
    dimensions?: BannerDimensions,
}

const BannerWidths = {
    FULL: 976,
    TWO_THIRDS: 640,
    HALF: 472,
    THIRD: 304,
}

const BannerHeights = {
    FULL: 640,
    TWO_THIRDS: 416,
    HALF: 304,
    THIRD: 192,
}

export const BannerVariants = {
    'full': {
        height: BannerHeights.FULL,
        width: BannerWidths.FULL,
    },
    'square-big': {
        height: BannerHeights.FULL,
        width: BannerWidths.TWO_THIRDS,
    },
    'square-small': {
        height: BannerHeights.HALF,
        width: BannerWidths.THIRD,
    },
    'rectangle-vertical-small': {
        height: BannerHeights.FULL,
        width: BannerWidths.THIRD,
    },
    'rectangle-horizontal-small': {
        height: BannerHeights.HALF,
        width: BannerWidths.TWO_THIRDS,
    },
    'rectangle-vertical-big': {
        height: BannerHeights.FULL,
        width: BannerWidths.HALF,
    },
    'rectangle-horizontal-big': {
        height: BannerHeights.FULL,
        width: BannerWidths.HALF,
    }
}

export const Banner = ({variant, ...props} : BannerProps) => {
    return (
        <BaseBanner {...props} dimensions={BannerVariants[variant]} /> 
    );
}
