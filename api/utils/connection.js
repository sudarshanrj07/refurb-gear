import { connect } from "mongoose";

export const DBConnect = (url) => {
	return connect(url);
};
