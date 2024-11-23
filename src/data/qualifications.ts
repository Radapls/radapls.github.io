// Image imports
import Alcaldia from "@assets/img/brands/alcaldia-cali.webp";
import IEI from "@assets/img/brands/iei.png";
import MOE from "@assets/img/brands/moe.webp";
import Wibx from "@assets/img/brands/wibx.webp";
import NT from "@assets/img/brands/nt.png";
import Birdi from "@assets/img/brands/birdi.png";
import Icesi from "@assets/img/brands/icesi.jpg";
import Javeriana from "@assets/img/brands/javeriana.svg";

export interface QualificationData
{
    image: { src: string };
    altText: string;
    title: string;
    subtitle: string;
    period: string;
    link?: string;
}

export interface QualificationItem
{
    id: 'work' | 'education',
    data: QualificationData[]
}

export interface TabItem
{
    id: string;
    iconClass: string;
    titleKey: string;
    isActive: boolean;
}

export const tabs: TabItem[] = [
    {
        id: "education",
        iconClass: "uil uil-graduation-cap",
        titleKey: "experience.education.title",
        isActive: false,
    },
    {
        id: "work",
        iconClass: "uil uil-briefcase-alt",
        titleKey: "experience.work.title",
        isActive: true,
    },
];

export const qualificationItems = {
    work: {
        id: 'education',
        data:
            [
                {
                    image: Javeriana,
                    altText: "Pontificia Universidad Javeriana",
                    title: "experience.education.q-edu-1",
                    subtitle: "experience.education.q-edu-2",
                    period: "2014 - 2019",
                },
                {
                    image: Icesi,
                    altText: "Universidad ICESI",
                    title: "experience.education.q-edu-3",
                    subtitle: "experience.education.q-edu-4",
                    period: "2021 - 2022",
                },
            ]
    },
    education: {
        id: 'education',
        data: [
            {
                image: MOE,
                altText: "MOE | Misión de Observación Electoral",
                title: "experience.work.q-work-1",
                subtitle: "experience.work.q-work-2",
                period: "Ene 2018 - Jul 2018",
            },
            {
                image: Alcaldia,
                altText: "Alcaldia de Cali",
                title: "experience.work.q-work-3",
                subtitle: "experience.work.q-work-4",
                period: "Mar 2019 - Dec 2019",
            },
            {
                image: IEI,
                altText: "IEI | Instituto de Estudios Interculturales",
                title: "experience.work.q-work-5",
                subtitle: "experience.work.q-work-6",
                period: "Jun 2020 - Dec 2021",
            },
            {
                image: Wibx,
                altText: "Wibx Company",
                title: "experience.work.q-work-7",
                subtitle: "experience.work.q-work-8",
                period: "Jan 2022 - Present",
                link: "/wibx",
            },
            {
                image: NT,
                altText: "NT Consult",
                title: "experience.work.q-work-9",
                subtitle: "experience.work.q-work-10",
                period: "May 2023 - Present",
            },
            {
                image: Birdi,
                altText: "BirdiRx",
                title: "experience.work.q-work-11",
                subtitle: "experience.work.q-work-12",
                period: "Jan 2022 - Present",
            },
        ]
    }
}