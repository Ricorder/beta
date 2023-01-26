import { ViewProps } from 'react-native'

export interface HeaderProps extends ViewProps { }

export interface PersonalDataModel {
	country: string,
	firstName: string,
	firstNameEn: null | string,
	isCompany: boolean,
	lastName: string,
	lastNameEn: null | string,
	middleName: string,
	middleNameEn: null | string,
	questionnaire: {
		documents: {
			isCompleted: boolean
		},
		inn: {
			isCompleted: boolean
		},
		operationalProtocol: {
			isCompleted: boolean
		},
		personalData: {
			isCompleted: boolean
		},
		profileInfo: {
			isCompleted: boolean
		}
	},
	status: string
}

export interface SkillNestedModel {
	assignmentRequest: {
		id: string,
		options: any[],
	},
	id: string,
	state: string,
	type: string,
}

export interface SkillsModel {
	lastSkillRequests: any[],
	skills: SkillNestedModel[]
}

export interface AllData extends Array<PersonalDataModel | SkillsModel> { 0: PersonalDataModel; 1: SkillsModel }

export interface RequestModel {
	method: string,
	headers: {
		Authorization: string
	},
	url: string,
}
