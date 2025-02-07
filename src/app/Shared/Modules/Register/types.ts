export type TComponent<NC> = {
  name: NC;
  componentClass: CustomElementConstructor;
  services?: any[];
};

export type TAdditionalService<NC> = {
  componentName: NC;
  services: any[];
};
