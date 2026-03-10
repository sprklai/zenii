pub mod adapter;
pub mod installer;
pub mod manifest;
pub mod process;
pub mod registry;

pub use manifest::PluginManifest;
pub use registry::{InstalledPlugin, PluginRegistry};
