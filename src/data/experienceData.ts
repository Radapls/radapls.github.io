import Javeriana from '@assets/img/brands/javeriana.webp';
import Icesi from '@assets/img/brands/icesi.webp';

import Alcaldia from '@assets/img/brands/alcaldia-cali.svg';
import IEI from '@assets/img/brands/iei.svg';
import MOE from '@assets/img/brands/moe.svg';
import Wibx from '@assets/img/brands/wibx.svg';
import Birdi from '@assets/img/brands/birdi.svg';
import EricssonSvg from '@assets/img/brands/ericsson.svg';

export const experienceTabs = [
	{
		icon: 'uil-briefcase-alt',
		tabTarget: '#work',
		description: {
			en: 'Work',
			es: 'Trabajo',
			'pt-br': 'Trabalho',
		},
	},
	{
		icon: 'uil-graduation-cap',
		tabTarget: '#education',
		description: {
			en: 'Education',
			es: 'Educación',
			'pt-br': 'Educação',
		},
	},
];

export const educationData = [
	{
		image: {
			src: Icesi,
			alt: 'Universidad ICESI Logo',
			height: 35,
			width: 35,
		},
		lang: {
			en: 'Master in Digital Business Strategy',
			es: 'Maestria en Estrategia Digital de Negocios',
			'pt-br': 'Mestrado em Estratégia de Negócios Digitais',
		},
		organization: 'Universidad ICESI',
		relativeTime: {
			en: '2021 - 2022',
			es: '2021 - 2022',
			'pt-br': '2021 - 2022',
		},
	},
	{
		image: {
			src: Javeriana,
			alt: 'Pontificia Universidad Javeriana Logo',
			height: 35,
			width: 35,
		},
		lang: {
			en: 'Political Science',
			es: 'Ciencia Política',
			'pt-br': 'Ciência Política',
		},
		organization: 'Pontificia Universidad Javeriana',
		relativeTime: {
			en: '2014 - 2019',
			es: '2014 - 2019',
			'pt-br': '2014 - 2019',
		},
	},
];

export const workData = [
	// Most recent first: the timeline opens centered on the latest job and
	// the user scrolls back through progressively older roles.
	{
		image: {
			svg: EricssonSvg,
			alt: 'Ericsson Logo',
			height: 35,
			width: 35,
		},
		lang: {
			en: 'UX/UI Developer',
			es: 'Desarrollador UX/UI',
			'pt-br': 'Desenvolvedor UX/UI',
		},
		organization: 'Ericsson',
		relativeTime: {
			en: 'Oct 2025 - Present',
			es: 'Oct 2025 - Presente',
			'pt-br': 'Out 2025 - Presente',
		},
		link: '/experience/ericsson',
	},
	{
		image: {
			svg: Wibx,
			alt: 'Wibx Company Logo',
			height: 35,
			width: 35,
		},
		lang: {
			en: 'FrontEnd Developer',
			es: 'Desarrollador FrontEnd',
			'pt-br': 'Desenvolvedor Frontend',
		},
		organization: 'Wibx Company',
		relativeTime: {
			en: 'Jan 2022 - Oct 2025',
			es: 'Ene 2022 - Oct 2025',
			'pt-br': 'Jan 2022 - Out 2025',
		},
		link: '/experience/wibx',
	},
	{
		image: {
			svg: Birdi,
			tone: 'birdi',
			alt: 'BirdiRx Logo',
			height: 35,
			width: 35,
		},
		lang: {
			en: 'FrontEnd Developer',
			es: 'Desarrollador FrontEnd',
			'pt-br': 'Desenvolvedor Frontend',
		},
		organization: 'BirdiRx',
		relativeTime: {
			en: 'May 2023 - Jan 2025',
			es: 'May 2023 - Ene 2025',
			'pt-br': 'Mai 2023 - Jan 2025',
		},
		link: '/experience/birdi',
	},
	{
		image: {
			svg: IEI,
			tone: 'iei',
			alt: 'IEI | Instituto de Estudios Interculturales Logo',
			height: 35,
			width: 35,
		},
		lang: {
			en: 'Social Researcher',
			es: 'Investigador Social',
			'pt-br': 'Pesquisador Social',
		},
		organization: 'Instituto de Estudios Interculturales',
		relativeTime: {
			en: 'Jun 2020 - Dec 2021',
			es: 'Jun 2020 - Dic 2021',
			'pt-br': 'Jun 2020 - Dez 2021',
		},
	},
	{
		image: {
			src: Alcaldia,
			alt: 'Alcaldia de Cali Logo',
			height: 35,
			width: 33,
		},
		lang: {
			en: 'Delivery Unit Member',
			es: 'Enlace de seguimiento estratégico',
			'pt-br': 'Ligação de Monitoramento Estratégico',
		},
		organization: 'Alcaldia de Cali',
		relativeTime: {
			en: 'Mar 2019 - Dec 2019',
			es: 'Mar 2019 - Dic 2019',
			'pt-br': 'Mar 2019 - Dez 2019',
		},
	},
	{
		image: {
			svg: MOE,
			alt: 'MOE | Misión de Observación Electoral Logo',
			height: 35,
			width: 35,
		},
		lang: {
			en: 'Research Assistant',
			es: 'Asistente de investigación',
			'pt-br': 'Assistente de Pesquisa',
		},
		organization: 'Misión de Observación Electoral (MOE)',
		relativeTime: {
			en: 'Jan 2018 - Jul 2018',
			es: 'Ene 2018 - Jul 2018',
			'pt-br': 'Jan 2018 - Jul 2018',
		},
	},
];
