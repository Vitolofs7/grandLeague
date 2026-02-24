const supabase = require("../config/supabase.config");

exports.create = async (req, res) => {
  const { teamName, coach, category, numberOfPlayers } = req.body;

  const { data, error } = await supabase
    .from("teams")
    .insert([{ teamName, coach, category, numberOfPlayers }])
    .select()
    .single();

  if (error) {
    return res
      .status(500)
      .send({ message: "Error creating the team", error: error.message });
  }
  res.status(201).send(data);
};

exports.findAll = async (req, res) => {
  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    return res
      .status(500)
      .send({ message: "Error obtaining teams", error: error.message });
  }
  res.status(200).send(data);
};

exports.findOne = async (req, res) => {
  const id = req.params.id;

  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return res.status(404).send({ message: "Team not found" });
  }
  res.status(200).send(data);
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const { teamName, coach, category, numberOfPlayers } = req.body;

  const { data, error } = await supabase
    .from("teams")
    .update({ teamName, coach, category, numberOfPlayers })
    .eq("id", id)
    .select()
    .single();

  if (error || !data) {
    return res
      .status(500)
      .send({
        message: `Could not update the team with id=${id}.`,
        error: error?.message,
      });
  }
  res.status(200).send(data);
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  const { error } = await supabase.from("teams").delete().eq("id", id);

  if (error) {
    return res
      .status(500)
      .send({ message: "Error deleting the team", error: error.message });
  }
  res.status(200).send({ message: "Team deleted" });
};
