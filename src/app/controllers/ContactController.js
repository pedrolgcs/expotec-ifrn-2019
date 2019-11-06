import Contact from '../models/contact';

class ContactController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const contacts = await Contact.paginate({}, { page });
    return res.status(200).json(contacts);
  }

  async store(req, res) {
    const { name, phone, favorite } = req.body;
    try {
      const contact = await Contact.create({ name, phone, favorite });
      return res.status(201).json(contact);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async show(req, res) {
    try {
      const contact = await Contact.findById(req.params.id);
      return res.status(200).json(contact);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async update(req, res) {
    const { name, phone, favorite } = req.body;
    try {
      const contact = await Contact.findByIdAndUpdate(
        req.params.id,
        {
          name,
          phone,
          favorite
        },
        { new: true }
      );
      return res.json(contact);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async delete(req, res) {
    if (!contact) {
      return res.status(404).json({ error: 'Contato não encontrado' });
    }
    try {
      await contact.deleteOne();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new ContactController();
