import mongoose, { Schema, models } from "mongoose";

const ServiceSchema = new Schema({
  icon: String,
  number: String,
  title: { type: String, required: true },
  tagline: String,
  color: String,
  tag: String,
  items: [{ type: String }],
  detail: Schema.Types.Mixed,
}, { timestamps: true });

const CaseStudySchema = new Schema({
  num: String,
  brand: String,
  category: String,
  color: String,
  accentLight: String,
  objective: String,
  strategy: String,
  execution: [{ type: String }],
  stats: Schema.Types.Mixed,
  fullDetail: Schema.Types.Mixed,
}, { timestamps: true });

const TeamSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  icon: String,
  color: String,
  linkedin: String,
  description: String,
}, { timestamps: true });

const ClientSchema = new Schema({
  name: { type: String },
  logo: String,
  row: Number,
  bg: String,
  num: String,
  label: String,
  kind: String,
}, { timestamps: true });

const RosterSchema = new Schema({
  handle: { type: String, required: true },
  niche: { type: String, required: true },
  followers: { type: String, required: true },
  icon: String,
  description: String,
  socials: Schema.Types.Mixed,
}, { timestamps: true });

export const Service = models.Service || mongoose.model("Service", ServiceSchema);
export const CaseStudy = models.CaseStudy || mongoose.model("CaseStudy", CaseStudySchema);
export const Team = models.Team || mongoose.model("Team", TeamSchema);
export const Client = models.Client || mongoose.model("Client", ClientSchema);
export const Roster = models.Roster || mongoose.model("Roster", RosterSchema);
