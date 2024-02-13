export type ContactsResponse = {
  contact: {
    data: {
      attributes: {
        instagram: string;
        linkedin: string;
        facebook: string;
      };
    };
  };
};

export type TContacts = {
  instagram: string;
  linkedin: string;
  facebook: string;
};
