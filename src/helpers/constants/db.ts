import { Types } from 'mongoose';

// SCHEMA TYPES
export const STRING_AND_REQUIRED = {
	type: String,
	required: true,
};

export const STRING_REQUIRED_AND_UNIQUE = {
	type: String,
	required: true,
	unique: true,
};

export const STRING_ARRAY_REQUIRED = {
	type: [String],
	required: true,
};

export const STRING_ARRAY_OPTIONAL = {
	type: [String],
	default: [],
};

export const STRING_AND_OPTIONAL = {
	type: String,
	default: '',
};

export const NUMBER_AND_REQUIRED = {
	type: Number,
	required: true,
};

export const NUMBER_AND_OPTIONAL = {
	type: Number,
	default: 0,
};

export const BOOLEAN_AND_REQUIRED = {
	type: Boolean,
	required: true,
};

export const BOOLEAN_DEFAULT_FALSE = {
	type: Boolean,
	default: false,
};

export const BOOLEAN_DEFAULT_TRUE = {
	type: Boolean,
	default: true,
};

export const DATE_AND_REQUIRED = {
	type: Date,
	required: true,
};

export const DATE_AND_OPTIONAL = {
	type: Date,
	default: null,
};

export const DELETED_AT_DEFAULT = {
	type: Date,
	default: null,
};

export const OBJECTID_AND_REQUIRED = {
	type: Types.ObjectId,
	required: true,
};

export const OBJECTID_AND_OPTIONAL = {
	type: Types.ObjectId,
	required: false,
};

// COLLECTION NAMES
export const API_REQUEST_COLLECTION_NAME = 'ApiRequest';
export const API_ERROR_COLLECTION_NAME = 'ApiError';
