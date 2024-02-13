export type ContactsResponse = {
  contact: {
    data: {
      attributes: TContacts;
    };
  };
};

export type TContacts = {
  instagram: string;
  linkedin: string;
  facebook: string;
};
