import React, { useMemo, useState } from "react";
import { AMLA_LESSONS, amlaLessonHref } from "../../lessons/amla/amlaManifest.js";

const QUESTIONS = [
  {
    id: "l01-advanced-expectation",
    lessonCode: "L01",
    lessonId: "amla-2026-04-16-intro-advanced",
    prompt: "Which expectation best matches the jump from AML Basic to AMLA?",
    options: [
      "The course reteaches every Python and scikit-learn detail from zero.",
      "Basic ML is assumed, and AMLA adds neural networks, notebooks and stronger interpretation.",
      "Only theory matters; implementation details are optional.",
      "A high metric is enough even if the model cannot be explained.",
    ],
    correct: 1,
    explanation: "The launch lecture frames AMLA as a more autonomous, interpretation-heavy continuation of Basic.",
    tags: ["course setup", "study strategy"],
    difficulty: "easy",
  },
  {
    id: "l01-perceptron-linear-boundary",
    lessonCode: "L01",
    lessonId: "amla-2026-04-16-intro-advanced",
    prompt: "Why does a single perceptron fail on XOR-like patterns?",
    options: [
      "It has no trainable weights.",
      "It can only create a linear decision boundary.",
      "It cannot accept numeric inputs.",
      "It always predicts continuous regression values.",
    ],
    correct: 1,
    explanation: "A perceptron/TLU applies a weighted sum and threshold, so one unit separates with a line or hyperplane.",
    tags: ["perceptron", "linear models"],
    difficulty: "easy",
  },
  {
    id: "l01-activation-depth",
    lessonCode: "L01",
    lessonId: "amla-2026-04-16-intro-advanced",
    prompt: "A student stacks many Dense layers but uses only linear activations. What is the best critique?",
    options: [
      "Depth alone guarantees nonlinear behavior.",
      "The stack is still equivalent to one linear transformation.",
      "The network becomes recurrent.",
      "The model cannot use gradient descent.",
    ],
    correct: 1,
    explanation: "Composing linear transformations does not create nonlinear decision boundaries.",
    tags: ["activation functions", "nonlinearity"],
    difficulty: "medium",
  },
  {
    id: "l01-playground-overfit",
    lessonCode: "L01",
    lessonId: "amla-2026-04-16-intro-advanced",
    prompt: "In the TensorFlow playground, a large model shows low loss but a strange boundary that isolates individual points. What should you do?",
    options: [
      "Accept it because low loss is the only relevant evidence.",
      "Inspect validation behavior, boundary shape and likely overfitting before claiming success.",
      "Remove all hidden layers.",
      "Switch to linear activation because it always generalizes better.",
    ],
    correct: 1,
    explanation: "The playground mini-lab emphasizes that metrics and visual behavior must be interpreted together.",
    tags: ["overfitting", "diagnostics"],
    difficulty: "medium",
  },
  {
    id: "l01-feature-representation",
    lessonCode: "L01",
    lessonId: "amla-2026-04-16-intro-advanced",
    prompt: "Adding squared input features makes a circular pattern easier to classify. What principle does this show?",
    options: [
      "Representation can make a learning problem easier.",
      "Feature engineering is forbidden in deep learning.",
      "Squared features are always optimal.",
      "Labels are no longer needed.",
    ],
    correct: 0,
    explanation: "A better input representation can reduce the burden on architecture and training.",
    tags: ["representation", "capacity"],
    difficulty: "medium",
  },
  {
    id: "l01-bias-term",
    lessonCode: "L01",
    lessonId: "amla-2026-04-16-intro-advanced",
    prompt: "In the neuron analogy, the bias term most closely corresponds to what linear-model component?",
    options: ["The intercept", "The residual", "The p-value", "The validation split"],
    correct: 0,
    explanation: "The professor used the y = ax + b analogy: the bias shifts the activation threshold.",
    tags: ["bias", "neuron"],
    difficulty: "easy",
  },
  {
    id: "l02-framework-choice",
    lessonCode: "L02",
    lessonId: "amla-2026-04-17-hands-on-setup",
    prompt: "Why does AMLA discuss scikit-learn, TensorFlow/Keras, PyTorch and Hugging Face together?",
    options: [
      "They are interchangeable names for the same library.",
      "Framework choice affects baselines, model building, pretrained access and project workflow.",
      "Only TensorFlow can train any neural network.",
      "Hugging Face is used only for spreadsheet analysis.",
    ],
    correct: 1,
    explanation: "The lesson frames libraries as workflow choices, not just syntax choices.",
    tags: ["frameworks", "workflow"],
    difficulty: "easy",
  },
  {
    id: "l02-keras-relationship",
    lessonCode: "L02",
    lessonId: "amla-2026-04-17-hands-on-setup",
    prompt: "What is the role of Keras in the course's TensorFlow workflow?",
    options: [
      "It is the high-level interface used to define and train models.",
      "It is a replacement for all numerical arrays.",
      "It is only a plotting package.",
      "It prevents using GPUs or tensors.",
    ],
    correct: 0,
    explanation: "Keras provides the high-level model-building interface used in the AMLA notebooks.",
    tags: ["Keras", "TensorFlow"],
    difficulty: "easy",
  },
  {
    id: "l02-sequential-api",
    lessonCode: "L02",
    lessonId: "amla-2026-04-17-hands-on-setup",
    prompt: "When is the Keras Sequential API the cleanest choice?",
    options: [
      "When the architecture is one simple stack of layers.",
      "When the model has several branches and multiple inputs.",
      "When the input shape is unknowable.",
      "When no training loop is needed.",
    ],
    correct: 0,
    explanation: "Sequential is meant for straightforward one-path layer stacks.",
    tags: ["Keras", "Sequential"],
    difficulty: "easy",
  },
  {
    id: "l02-functional-api",
    lessonCode: "L02",
    lessonId: "amla-2026-04-17-hands-on-setup",
    prompt: "Which model design most strongly suggests using the Keras Functional API?",
    options: [
      "A two-layer Dense classifier.",
      "A model with branches, merges or multiple inputs.",
      "A model trained for exactly one epoch.",
      "A model with only one output class.",
    ],
    correct: 1,
    explanation: "Functional API supports graph-like model topologies that Sequential cannot express cleanly.",
    tags: ["Keras", "Functional API"],
    difficulty: "medium",
  },
  {
    id: "l02-compile-fit-order",
    lessonCode: "L02",
    lessonId: "amla-2026-04-17-hands-on-setup",
    prompt: "Which ordering best matches the basic Keras workflow?",
    options: [
      "fit, compile, define architecture, evaluate",
      "define architecture, compile, fit, evaluate",
      "evaluate, fit, compile, define architecture",
      "compile, evaluate, fit, define architecture",
    ],
    correct: 1,
    explanation: "The class workflow is build the model, compile the training recipe, train, then evaluate.",
    tags: ["Keras workflow"],
    difficulty: "easy",
  },
  {
    id: "l02-validation-split",
    lessonCode: "L02",
    lessonId: "amla-2026-04-17-hands-on-setup",
    prompt: "In `model.fit`, what does `validation_split=0.1` mean?",
    options: [
      "10% of the training data is held out for validation metrics during training.",
      "10% of the test data updates the weights.",
      "The learning rate is set to 0.1.",
      "Only 10% of the model parameters are trained.",
    ],
    correct: 0,
    explanation: "Keras holds out part of the provided training data to monitor validation metrics after epochs.",
    tags: ["validation", "model.fit"],
    difficulty: "easy",
  },
  {
    id: "l03-mnist-continuity",
    lessonCode: "L03",
    lessonId: "amla-2026-04-20-neural-networks",
    prompt: "Why does the course return to MNIST in the Keras continuation?",
    options: [
      "To change the scientific problem completely.",
      "To keep the dataset familiar while comparing workflows and model behavior.",
      "Because MNIST requires no preprocessing or evaluation.",
      "Because MNIST cannot be solved by classical ML.",
    ],
    correct: 1,
    explanation: "The continuity lets students focus on the Keras workflow rather than relearning the dataset.",
    tags: ["MNIST", "workflow"],
    difficulty: "easy",
  },
  {
    id: "l03-softmax-output",
    lessonCode: "L03",
    lessonId: "amla-2026-04-20-neural-networks",
    prompt: "Why does the MNIST classifier use a 10-unit softmax output?",
    options: [
      "Each unit corresponds to one digit class and softmax gives class probabilities.",
      "Softmax is required for binary regression.",
      "The 10 units are the first 10 pixels.",
      "It removes the need for labels.",
    ],
    correct: 0,
    explanation: "MNIST has ten digit classes, so the output head represents ten class probabilities.",
    tags: ["softmax", "classification"],
    difficulty: "easy",
  },
  {
    id: "l03-flatten-shape",
    lessonCode: "L03",
    lessonId: "amla-2026-04-20-neural-networks",
    prompt: "What is the role of flattening in the simple MNIST Dense model?",
    options: [
      "It converts the 2D image grid into a vector that Dense layers can consume.",
      "It removes all grayscale information.",
      "It performs convolution.",
      "It splits the data into train and test sets.",
    ],
    correct: 0,
    explanation: "Dense layers expect vector-like inputs, so the 28x28 image is flattened.",
    tags: ["MNIST", "input shape"],
    difficulty: "easy",
  },
  {
    id: "l03-history-curves",
    lessonCode: "L03",
    lessonId: "amla-2026-04-20-neural-networks",
    prompt: "Training loss decreases while validation loss rises after several epochs. What is the most defensible interpretation?",
    options: [
      "The model may be overfitting and needs diagnostic action.",
      "The model is definitely underfitting.",
      "Validation loss is never useful.",
      "The test set will necessarily improve.",
    ],
    correct: 0,
    explanation: "Diverging train/validation curves are a common overfitting warning.",
    tags: ["history", "overfitting"],
    difficulty: "medium",
  },
  {
    id: "l03-evaluate-vs-fit",
    lessonCode: "L03",
    lessonId: "amla-2026-04-20-neural-networks",
    prompt: "Why should final `evaluate` results not be confused with validation metrics during `fit`?",
    options: [
      "Validation metrics monitor training decisions; final evaluation estimates performance on held-out test data.",
      "Evaluation updates the model weights more aggressively.",
      "Validation data has no labels.",
      "They are mathematically identical in all projects.",
    ],
    correct: 0,
    explanation: "Validation and test evaluation serve different roles in the workflow.",
    tags: ["validation", "evaluation"],
    difficulty: "medium",
  },
  {
    id: "l03-loss-choice",
    lessonCode: "L03",
    lessonId: "amla-2026-04-20-neural-networks",
    prompt: "For integer MNIST labels with a softmax output, which loss family is most appropriate?",
    options: [
      "Sparse categorical crossentropy.",
      "Mean squared error only.",
      "Binary crossentropy with one output unit.",
      "Dice loss for pixel masks.",
    ],
    correct: 0,
    explanation: "Sparse categorical crossentropy matches integer multiclass labels and softmax probabilities.",
    tags: ["loss", "multiclass"],
    difficulty: "medium",
  },
  {
    id: "l04-forward-prop",
    lessonCode: "L04",
    lessonId: "amla-2026-04-23-deep-learning-frameworks",
    prompt: "In forward propagation, what happens layer by layer?",
    options: [
      "Inputs are multiplied by weights, shifted by biases and passed through activations.",
      "Labels are randomly assigned before every prediction.",
      "The validation set replaces the weights.",
      "Only the final layer computes anything.",
    ],
    correct: 0,
    explanation: "The lecture formalizes neural networks as weighted sums plus bias and activation across layers.",
    tags: ["forward propagation", "neural networks"],
    difficulty: "easy",
  },
  {
    id: "l04-bias-unit",
    lessonCode: "L04",
    lessonId: "amla-2026-04-23-deep-learning-frameworks",
    prompt: "Why is a bias unit included in the network representation?",
    options: [
      "It lets the activation threshold shift independently of the input values.",
      "It removes the need for hidden layers.",
      "It guarantees zero training error.",
      "It converts classification into clustering.",
    ],
    correct: 0,
    explanation: "Bias terms add an intercept-like shift to the unit's weighted input.",
    tags: ["bias", "representation"],
    difficulty: "easy",
  },
  {
    id: "l04-xnor-hidden-layer",
    lessonCode: "L04",
    lessonId: "amla-2026-04-23-deep-learning-frameworks",
    prompt: "What does the XNOR example show about hidden layers?",
    options: [
      "Hidden layers can combine simpler boundaries to solve patterns one perceptron cannot.",
      "Hidden layers are only decorative.",
      "XNOR can only be solved by decision trees.",
      "Activations must always be linear.",
    ],
    correct: 0,
    explanation: "The hidden layer creates intermediate representations that make the final decision possible.",
    tags: ["XNOR", "hidden layers"],
    difficulty: "medium",
  },
  {
    id: "l04-decision-tree-value",
    lessonCode: "L04",
    lessonId: "amla-2026-04-23-deep-learning-frameworks",
    prompt: "Why keep decision trees in an advanced neural-network course?",
    options: [
      "They provide interpretable baselines and contrast with neural-network decision logic.",
      "They are the same architecture as MLPs.",
      "They always outperform deep learning on images.",
      "They eliminate the need for data splits.",
    ],
    correct: 0,
    explanation: "Decision trees are useful interpretable references before moving to more complex models.",
    tags: ["decision trees", "baseline"],
    difficulty: "easy",
  },
  {
    id: "l04-cart-splits",
    lessonCode: "L04",
    lessonId: "amla-2026-04-23-deep-learning-frameworks",
    prompt: "A CART-style tree makes predictions by:",
    options: [
      "Following feature-threshold splits until reaching a leaf prediction.",
      "Applying softmax to every pixel.",
      "Unrolling hidden state through time.",
      "Sampling from a latent Gaussian.",
    ],
    correct: 0,
    explanation: "Trees route examples through learned feature thresholds toward leaf outputs.",
    tags: ["CART", "interpretability"],
    difficulty: "easy",
  },
  {
    id: "l04-tree-overfit",
    lessonCode: "L04",
    lessonId: "amla-2026-04-23-deep-learning-frameworks",
    prompt: "A decision tree perfectly fits training data but has unstable tiny leaves. What is the likely issue?",
    options: [
      "Overfitting due to excessive depth or weak pruning constraints.",
      "Too much BatchNorm.",
      "A missing softmax unit.",
      "The model is underparameterized.",
    ],
    correct: 0,
    explanation: "Unconstrained trees can memorize training data and generalize poorly.",
    tags: ["decision trees", "overfitting"],
    difficulty: "medium",
  },
  {
    id: "l05-output-heads",
    lessonCode: "L05",
    lessonId: "amla-2026-05-07-training-diagnostics",
    prompt: "Which output-head choice best matches a multiclass single-label classification task?",
    options: [
      "One softmax unit per class.",
      "One linear unit only.",
      "One sigmoid unit per pixel.",
      "No output activation.",
    ],
    correct: 0,
    explanation: "Single-label multiclass classification typically uses a softmax head with one unit per class.",
    tags: ["MLP", "output heads"],
    difficulty: "easy",
  },
  {
    id: "l05-bp-vs-gd",
    lessonCode: "L05",
    lessonId: "amla-2026-05-07-training-diagnostics",
    prompt: "How are backpropagation and gradient descent related?",
    options: [
      "Backpropagation computes gradients; gradient descent uses them to update parameters.",
      "They are unrelated algorithms from different fields.",
      "Gradient descent computes labels; backpropagation splits data.",
      "Backpropagation replaces the optimizer.",
    ],
    correct: 0,
    explanation: "The lecture separates gradient computation from parameter-update logic.",
    tags: ["backpropagation", "gradient descent"],
    difficulty: "easy",
  },
  {
    id: "l05-epoch-minibatch",
    lessonCode: "L05",
    lessonId: "amla-2026-05-07-training-diagnostics",
    prompt: "What is an epoch in mini-batch training?",
    options: [
      "One full pass over the training data.",
      "One individual sample.",
      "One neuron in a hidden layer.",
      "One validation metric only.",
    ],
    correct: 0,
    explanation: "An epoch means the training algorithm has processed the full training set once.",
    tags: ["epochs", "mini-batches"],
    difficulty: "easy",
  },
  {
    id: "l05-tensor-rank",
    lessonCode: "L05",
    lessonId: "amla-2026-05-07-training-diagnostics",
    prompt: "Why does tensor rank matter in deep-learning workflows?",
    options: [
      "It tells you how data dimensions are organized before layers operate on them.",
      "It replaces the loss function.",
      "It determines the class names automatically.",
      "It prevents overfitting by itself.",
    ],
    correct: 0,
    explanation: "Images, batches and sequences have different tensor shapes, so rank/shape reasoning prevents architecture mistakes.",
    tags: ["tensors", "shape"],
    difficulty: "medium",
  },
  {
    id: "l05-dense-operation",
    lessonCode: "L05",
    lessonId: "amla-2026-05-07-training-diagnostics",
    prompt: "Inside a Dense layer, the core operation is best summarized as:",
    options: [
      "Matrix multiplication plus bias, then an activation.",
      "Sorting labels alphabetically.",
      "Random cropping plus pooling.",
      "Sampling from the discriminator.",
    ],
    correct: 0,
    explanation: "Dense layers compute affine transformations followed by optional nonlinear activations.",
    tags: ["Dense layers", "tensors"],
    difficulty: "easy",
  },
  {
    id: "l05-learning-rate",
    lessonCode: "L05",
    lessonId: "amla-2026-05-07-training-diagnostics",
    prompt: "Why is learning rate a high-impact optimizer parameter?",
    options: [
      "It controls update size; too small can be slow, too large can diverge.",
      "It chooses the train/test split.",
      "It sets the number of output classes.",
      "It replaces model evaluation.",
    ],
    correct: 0,
    explanation: "The optimizer step size directly affects convergence behavior.",
    tags: ["optimizers", "learning rate"],
    difficulty: "medium",
  },
  {
    id: "l06-local-receptive-fields",
    lessonCode: "L06",
    lessonId: "amla-2026-05-08-model-regularization",
    prompt: "What is the core intuition behind local receptive fields in CNNs?",
    options: [
      "Nearby pixels often form useful local patterns.",
      "Every pixel must connect to every neuron in the first layer.",
      "CNNs ignore image structure.",
      "Convolutions require text tokens.",
    ],
    correct: 0,
    explanation: "CNNs exploit local spatial structure instead of flattening all pixels immediately.",
    tags: ["CNN", "receptive fields"],
    difficulty: "easy",
  },
  {
    id: "l06-weight-sharing",
    lessonCode: "L06",
    lessonId: "amla-2026-05-08-model-regularization",
    prompt: "Why does weight sharing matter in convolution?",
    options: [
      "The same filter detects a pattern across different spatial locations with fewer parameters.",
      "It forces all outputs to be identical.",
      "It removes the need for activation functions.",
      "It converts images into labels directly.",
    ],
    correct: 0,
    explanation: "Filters reuse weights across the image, improving parameter efficiency and translation handling.",
    tags: ["convolution", "weight sharing"],
    difficulty: "easy",
  },
  {
    id: "l06-padding-stride",
    lessonCode: "L06",
    lessonId: "amla-2026-05-08-model-regularization",
    prompt: "A convolution uses larger stride with no padding. What is the likely effect on feature-map size?",
    options: [
      "The spatial output becomes smaller.",
      "The number of classes doubles.",
      "The input image becomes colorized.",
      "The model becomes recurrent.",
    ],
    correct: 0,
    explanation: "Stride and padding control how the filter moves and therefore the output spatial dimensions.",
    tags: ["stride", "padding"],
    difficulty: "medium",
  },
  {
    id: "l06-pooling-purpose",
    lessonCode: "L06",
    lessonId: "amla-2026-05-08-model-regularization",
    prompt: "What is a practical role of pooling in CNNs?",
    options: [
      "Reduce spatial resolution while keeping salient local responses.",
      "Generate class labels without training.",
      "Replace every convolutional layer.",
      "Turn an image task into time-series forecasting.",
    ],
    correct: 0,
    explanation: "Pooling summarizes local regions and reduces spatial size.",
    tags: ["pooling", "CNN"],
    difficulty: "easy",
  },
  {
    id: "l06-filter-visualization",
    lessonCode: "L06",
    lessonId: "amla-2026-05-08-model-regularization",
    prompt: "What is the safest interpretation of early CNN feature maps?",
    options: [
      "They show activated visual patterns, but should not be overinterpreted as complete reasoning.",
      "They prove the model is fair.",
      "They replace validation metrics.",
      "They identify causal biological mechanisms automatically.",
    ],
    correct: 0,
    explanation: "The lesson uses visualizations as helpful but limited inspection tools.",
    tags: ["feature maps", "interpretation"],
    difficulty: "medium",
  },
  {
    id: "l06-architecture-tour",
    lessonCode: "L06",
    lessonId: "amla-2026-05-08-model-regularization",
    prompt: "Why mention VGG, ResNet and related CNN architectures in AMLA?",
    options: [
      "To recognize design patterns and pretrained-model context, not to memorize every layer.",
      "To show that all CNNs have identical topology.",
      "To replace all project baselines.",
      "To avoid using validation data.",
    ],
    correct: 0,
    explanation: "The architecture tour gives context for modern CNN design and transfer-learning choices.",
    tags: ["VGG", "ResNet", "architecture"],
    difficulty: "medium",
  },
  {
    id: "l07-ae-purpose",
    lessonCode: "L07",
    lessonId: "amla-2026-05-14-convolutional-networks",
    prompt: "What is the main training objective of a basic autoencoder?",
    options: [
      "Reconstruct its input through a compressed or structured latent representation.",
      "Classify images into fixed labels only.",
      "Maximize discriminator loss.",
      "Generate decision-tree splits.",
    ],
    correct: 0,
    explanation: "Autoencoders learn representations by reconstructing inputs through an encoder-decoder structure.",
    tags: ["autoencoders", "latent space"],
    difficulty: "easy",
  },
  {
    id: "l07-denoising-ae",
    lessonCode: "L07",
    lessonId: "amla-2026-05-14-convolutional-networks",
    prompt: "In a denoising autoencoder, what does the model learn?",
    options: [
      "Map corrupted inputs back toward clean targets.",
      "Add noise to every output forever.",
      "Replace labels with random numbers.",
      "Train a discriminator against a generator.",
    ],
    correct: 0,
    explanation: "Denoising AEs learn robust representations by reconstructing clean data from noisy inputs.",
    tags: ["denoising", "autoencoders"],
    difficulty: "easy",
  },
  {
    id: "l07-sparse-ae",
    lessonCode: "L07",
    lessonId: "amla-2026-05-14-convolutional-networks",
    prompt: "What is the point of adding sparsity pressure to an autoencoder?",
    options: [
      "Encourage compact, selective internal representations.",
      "Guarantee a perfect reconstruction for every dataset.",
      "Remove the decoder.",
      "Convert the model into a random forest.",
    ],
    correct: 0,
    explanation: "Sparse AEs constrain activations so the representation is more selective.",
    tags: ["sparse AE", "representation"],
    difficulty: "medium",
  },
  {
    id: "l07-svm-margin",
    lessonCode: "L07",
    lessonId: "amla-2026-05-14-convolutional-networks",
    prompt: "What does the margin intuition in SVMs emphasize?",
    options: [
      "Choose a separating boundary with maximum distance to support vectors.",
      "Always use the deepest neural network.",
      "Ignore points near the boundary.",
      "Use softmax for every binary task.",
    ],
    correct: 0,
    explanation: "SVMs seek a boundary with a large margin around critical support vectors.",
    tags: ["SVM", "margin"],
    difficulty: "easy",
  },
  {
    id: "l07-kernel-trick",
    lessonCode: "L07",
    lessonId: "amla-2026-05-14-convolutional-networks",
    prompt: "Why is the kernel trick useful for SVMs?",
    options: [
      "It enables nonlinear separation through implicit feature spaces.",
      "It removes all hyperparameters.",
      "It only works on images.",
      "It makes PCA unnecessary in every case.",
    ],
    correct: 0,
    explanation: "Kernels let SVMs behave as if data were mapped to richer feature spaces.",
    tags: ["SVM", "kernel trick"],
    difficulty: "medium",
  },
  {
    id: "l07-pca-purpose",
    lessonCode: "L07",
    lessonId: "amla-2026-05-14-convolutional-networks",
    prompt: "What is PCA primarily doing in the dimensionality-reduction section?",
    options: [
      "Finding directions of high variance for compression or visualization.",
      "Learning pixel-wise segmentation masks.",
      "Training a recurrent hidden state.",
      "Replacing all model evaluation.",
    ],
    correct: 0,
    explanation: "PCA projects data onto principal components that capture variance.",
    tags: ["PCA", "dimensionality reduction"],
    difficulty: "easy",
  },
  {
    id: "l08-voting-ensemble",
    lessonCode: "L08",
    lessonId: "amla-2026-05-15-cnn-practice",
    prompt: "What is the core idea of a voting ensemble?",
    options: [
      "Combine predictions from multiple models to produce a final prediction.",
      "Train one model without labels.",
      "Use a single neuron with no bias.",
      "Generate images from random noise.",
    ],
    correct: 0,
    explanation: "Voting aggregates model predictions, either by class votes or probabilities.",
    tags: ["ensemble", "voting"],
    difficulty: "easy",
  },
  {
    id: "l08-hard-soft-voting",
    lessonCode: "L08",
    lessonId: "amla-2026-05-15-cnn-practice",
    prompt: "What is the difference between hard and soft voting?",
    options: [
      "Hard voting uses predicted classes; soft voting combines predicted probabilities.",
      "Hard voting trains neural networks; soft voting trains decision trees.",
      "Hard voting uses images; soft voting uses text.",
      "There is no difference.",
    ],
    correct: 0,
    explanation: "Soft voting can use confidence information when calibrated probabilities are meaningful.",
    tags: ["voting", "probabilities"],
    difficulty: "easy",
  },
  {
    id: "l08-bagging",
    lessonCode: "L08",
    lessonId: "amla-2026-05-15-cnn-practice",
    prompt: "Bagging mainly reduces model variance by:",
    options: [
      "Training models on bootstrap samples and aggregating them.",
      "Increasing one tree's depth until it memorizes data.",
      "Removing all randomization.",
      "Using only the test set.",
    ],
    correct: 0,
    explanation: "Bootstrap aggregation stabilizes high-variance learners like decision trees.",
    tags: ["bagging", "variance"],
    difficulty: "medium",
  },
  {
    id: "l08-random-forest",
    lessonCode: "L08",
    lessonId: "amla-2026-05-15-cnn-practice",
    prompt: "What extra randomness helps random forests decorrelate trees?",
    options: [
      "Sampling features considered at splits.",
      "Using no training data.",
      "Replacing trees with RNNs.",
      "Removing all labels.",
    ],
    correct: 0,
    explanation: "Random forests combine bagging with random feature subsets at splits.",
    tags: ["random forest", "bagging"],
    difficulty: "medium",
  },
  {
    id: "l08-boosting",
    lessonCode: "L08",
    lessonId: "amla-2026-05-15-cnn-practice",
    prompt: "How does boosting differ from bagging?",
    options: [
      "Boosting builds learners sequentially to correct previous errors.",
      "Boosting trains all models independently on equal bootstrap samples only.",
      "Boosting cannot overfit.",
      "Boosting is only used for image segmentation.",
    ],
    correct: 0,
    explanation: "Boosting creates an additive sequence where later learners focus on remaining errors.",
    tags: ["boosting", "XGBoost"],
    difficulty: "medium",
  },
  {
    id: "l08-stacking",
    lessonCode: "L08",
    lessonId: "amla-2026-05-15-cnn-practice",
    prompt: "What is the key risk when training a stacking meta-model?",
    options: [
      "Leaking target information if base-model predictions are not generated carefully.",
      "Having more than one base model.",
      "Using validation data at all.",
      "Using tabular features.",
    ],
    correct: 0,
    explanation: "Stacking needs careful out-of-fold style predictions to avoid training the meta-learner on leaked answers.",
    tags: ["stacking", "leakage"],
    difficulty: "hard",
  },
  {
    id: "l09-fluocells-difficulty",
    lessonCode: "L09",
    lessonId: "amla-2026-05-21-vision-mini-project",
    prompt: "Why is Fluocells a difficult object-counting problem?",
    options: [
      "Crowding, artifacts, noisy masks and ambiguous cell boundaries complicate counting.",
      "Every image has exactly one perfectly centered cell.",
      "The labels are unnecessary.",
      "Pixel intensity never varies.",
    ],
    correct: 0,
    explanation: "The lecture emphasizes dataset-specific EDA and failure modes before modeling.",
    tags: ["Fluocells", "EDA"],
    difficulty: "easy",
  },
  {
    id: "l09-threshold-baseline",
    lessonCode: "L09",
    lessonId: "amla-2026-05-21-vision-mini-project",
    prompt: "Why build a thresholding baseline before deep segmentation?",
    options: [
      "It creates a simple reference point and exposes data/metric issues.",
      "It guarantees the best possible model.",
      "It removes the need for masks.",
      "It converts images into text tokens.",
    ],
    correct: 0,
    explanation: "A baseline shows whether advanced models actually improve the workflow.",
    tags: ["thresholding", "baseline"],
    difficulty: "easy",
  },
  {
    id: "l09-pixel-accuracy-trap",
    lessonCode: "L09",
    lessonId: "amla-2026-05-21-vision-mini-project",
    prompt: "A Fluocells model has high pixel accuracy but misses many cells. Why can the metric be misleading?",
    options: [
      "Background pixels dominate, so a model can look good while failing object-level counting.",
      "Pixel accuracy is always the same as Dice loss.",
      "High pixel accuracy proves perfect counting.",
      "The model must be an RNN.",
    ],
    correct: 0,
    explanation: "Class imbalance makes pixel accuracy weak for small foreground objects.",
    tags: ["metrics", "class imbalance"],
    difficulty: "medium",
  },
  {
    id: "l09-segmentation-vs-counting",
    lessonCode: "L09",
    lessonId: "amla-2026-05-21-vision-mini-project",
    prompt: "Why can segmentation help object counting?",
    options: [
      "A mask can identify cell regions that can later be counted or post-processed.",
      "Segmentation removes the need for evaluation.",
      "Segmentation only predicts a single scalar.",
      "Segmentation is identical to PCA.",
    ],
    correct: 0,
    explanation: "The Fluocells workflow uses segmentation as a path toward object recognition/counting.",
    tags: ["segmentation", "counting"],
    difficulty: "medium",
  },
  {
    id: "l09-mask-quality",
    lessonCode: "L09",
    lessonId: "amla-2026-05-21-vision-mini-project",
    prompt: "What project issue follows from masks being semi-automatic or expert-refined?",
    options: [
      "Labels may contain subjectivity/noise, so model errors must be interpreted carefully.",
      "Masks are guaranteed perfect ground truth.",
      "No validation set is required.",
      "The model cannot be trained.",
    ],
    correct: 0,
    explanation: "Label quality affects both training and evaluation interpretation.",
    tags: ["labels", "masks"],
    difficulty: "medium",
  },
  {
    id: "l09-eda-before-model",
    lessonCode: "L09",
    lessonId: "amla-2026-05-21-vision-mini-project",
    prompt: "What should EDA for Fluocells establish before modeling?",
    options: [
      "Image sizes, intensities, artifacts, foreground balance and label examples.",
      "Only final leaderboard rank.",
      "Only the number of epochs.",
      "Only the optimizer name.",
    ],
    correct: 0,
    explanation: "EDA turns the broad task into a concrete modeling and evaluation workflow.",
    tags: ["EDA", "project"],
    difficulty: "easy",
  },
  {
    id: "l10-semantic-segmentation",
    lessonCode: "L10",
    lessonId: "amla-2026-05-22-segmentation-workflow",
    prompt: "In the Fluocells workflow, semantic segmentation means:",
    options: [
      "Classifying each pixel as background or cell.",
      "Assigning one class to the whole image only.",
      "Generating text from a prompt.",
      "Clustering patients by tabular features.",
    ],
    correct: 0,
    explanation: "The segmentation model outputs a pixel-level class/probability map.",
    tags: ["semantic segmentation", "Fluocells"],
    difficulty: "easy",
  },
  {
    id: "l10-instance-vs-semantic",
    lessonCode: "L10",
    lessonId: "amla-2026-05-22-segmentation-workflow",
    prompt: "Why is instance segmentation conceptually closer to counting separate cells than semantic segmentation?",
    options: [
      "It distinguishes individual objects rather than only foreground/background pixels.",
      "It ignores masks.",
      "It uses no images.",
      "It is another name for BatchNorm.",
    ],
    correct: 0,
    explanation: "Semantic masks show cell pixels; instance masks separate individual cells.",
    tags: ["instance segmentation", "counting"],
    difficulty: "medium",
  },
  {
    id: "l10-cresunet",
    lessonCode: "L10",
    lessonId: "amla-2026-05-22-segmentation-workflow",
    prompt: "What is the purpose of U-Net/c-ResUNet style skip connections?",
    options: [
      "Combine high-resolution spatial detail with deeper contextual features.",
      "Remove all convolutional layers.",
      "Turn masks into text.",
      "Avoid training data completely.",
    ],
    correct: 0,
    explanation: "Segmentation architectures need both localization and semantic context.",
    tags: ["U-Net", "c-ResUNet"],
    difficulty: "medium",
  },
  {
    id: "l10-dataloaders",
    lessonCode: "L10",
    lessonId: "amla-2026-05-22-segmentation-workflow",
    prompt: "What must a segmentation DataLoader keep synchronized?",
    options: [
      "Input images and their corresponding masks, including transformations.",
      "Only model weights and optimizer names.",
      "Only class names and file extensions.",
      "Only training and test labels without images.",
    ],
    correct: 0,
    explanation: "Image/mask pairs must receive matching spatial transforms.",
    tags: ["FastAI", "DataLoaders"],
    difficulty: "easy",
  },
  {
    id: "l10-augmentation-trap",
    lessonCode: "L10",
    lessonId: "amla-2026-05-22-segmentation-workflow",
    prompt: "A student randomly crops Fluocells images but leaves masks unchanged. What is wrong?",
    options: [
      "The mask no longer aligns with the image, corrupting supervision.",
      "Cropping always improves segmentation.",
      "Masks never need transformations.",
      "The loss function automatically fixes alignment.",
    ],
    correct: 0,
    explanation: "Spatial augmentations must be applied consistently to both images and masks.",
    tags: ["augmentation", "masks"],
    difficulty: "medium",
  },
  {
    id: "l10-dice-loss",
    lessonCode: "L10",
    lessonId: "amla-2026-05-22-segmentation-workflow",
    prompt: "Why can Dice-style objectives be useful for Fluocells segmentation?",
    options: [
      "They focus on overlap and are less dominated by abundant background pixels.",
      "They remove the need for masks.",
      "They only work for language models.",
      "They replace data augmentation entirely.",
    ],
    correct: 0,
    explanation: "Overlap-based metrics/losses are useful when foreground is small relative to background.",
    tags: ["Dice loss", "class imbalance"],
    difficulty: "medium",
  },
  {
    id: "l11-interpretability-xai",
    lessonCode: "L11",
    lessonId: "amla-2026-05-28-explainable-ai",
    prompt: "Which statement best matches the lecture's distinction between interpretability and explainability?",
    options: [
      "Interpretability is model-understandability; XAI methods explain behavior when models are less transparent.",
      "They mean exactly the same thing in every context.",
      "Explainability is only about plotting accuracy.",
      "Interpretability removes bias automatically.",
    ],
    correct: 0,
    explanation: "The XAI lecture separates transparent models from tools that explain model behavior.",
    tags: ["XAI", "interpretability"],
    difficulty: "easy",
  },
  {
    id: "l11-global-local",
    lessonCode: "L11",
    lessonId: "amla-2026-05-28-explainable-ai",
    prompt: "A SHAP summary plot is mainly useful for what kind of explanation?",
    options: [
      "Global feature influence across many samples.",
      "Only one pixel mask for one image.",
      "A recurrent hidden state.",
      "A train/test split.",
    ],
    correct: 0,
    explanation: "SHAP summary plots aggregate feature effects across observations.",
    tags: ["SHAP", "global explanation"],
    difficulty: "easy",
  },
  {
    id: "l11-local-explanation",
    lessonCode: "L11",
    lessonId: "amla-2026-05-28-explainable-ai",
    prompt: "Why might a local explanation be necessary even when global feature importance looks reasonable?",
    options: [
      "Individual predictions can rely on different feature patterns than the global average.",
      "Global explanations are always fake.",
      "Local explanations replace the trained model.",
      "Local explanations require no input data.",
    ],
    correct: 0,
    explanation: "Local explanations inspect the reasons behind a specific prediction.",
    tags: ["local explanation", "XAI"],
    difficulty: "medium",
  },
  {
    id: "l11-lime-surrogate",
    lessonCode: "L11",
    lessonId: "amla-2026-05-28-explainable-ai",
    prompt: "What is the core idea behind LIME?",
    options: [
      "Fit a simple local surrogate around one prediction to approximate model behavior nearby.",
      "Train a GAN discriminator.",
      "Normalize hidden states in an RNN.",
      "Compute PCA directions only.",
    ],
    correct: 0,
    explanation: "LIME explains a prediction through a locally faithful, simpler model.",
    tags: ["LIME", "surrogate"],
    difficulty: "medium",
  },
  {
    id: "l11-xai-pitfall",
    lessonCode: "L11",
    lessonId: "amla-2026-05-28-explainable-ai",
    prompt: "What is a common XAI trap in project reporting?",
    options: [
      "Treating an explanation plot as proof that the model is correct or unbiased.",
      "Stating whether the explanation is local or global.",
      "Comparing explanations across methods.",
      "Using XAI to inspect failures.",
    ],
    correct: 0,
    explanation: "XAI supports inspection; it does not certify correctness by itself.",
    tags: ["XAI pitfalls", "bias"],
    difficulty: "hard",
  },
  {
    id: "l11-shap-disagreement",
    lessonCode: "L11",
    lessonId: "amla-2026-05-28-explainable-ai",
    prompt: "SHAP and LIME give different explanations for one case. What is the best response?",
    options: [
      "Investigate assumptions, locality, model behavior and data context before choosing a narrative.",
      "Delete the method with the less attractive plot.",
      "Assume both are useless.",
      "Report only accuracy instead.",
    ],
    correct: 0,
    explanation: "The lesson encourages critical comparison when XAI methods disagree.",
    tags: ["SHAP", "LIME", "comparison"],
    difficulty: "hard",
  },
  {
    id: "l12-rnn-input-shape",
    lessonCode: "L12",
    lessonId: "amla-2026-05-29-project-xai-sequential",
    prompt: "Which shape best matches the RNN time-series framing from the final lecture?",
    options: [
      "[batch_size, n_steps, dimensionality]",
      "[height, width, channels]",
      "[classes, probabilities]",
      "[features, labels, loss]",
    ],
    correct: 0,
    explanation: "RNN input is organized by batch, time steps and feature dimensionality.",
    tags: ["RNN", "time series"],
    difficulty: "easy",
  },
  {
    id: "l12-bptt",
    lessonCode: "L12",
    lessonId: "amla-2026-05-29-project-xai-sequential",
    prompt: "Why is training long RNN sequences difficult?",
    options: [
      "Unrolling through many time steps creates a deep graph with vanishing/exploding gradient issues.",
      "RNNs have no parameters.",
      "Backpropagation cannot be used with sequences.",
      "All sequence data is unordered.",
    ],
    correct: 0,
    explanation: "BPTT propagates gradients through the unrolled time graph.",
    tags: ["BPTT", "gradients"],
    difficulty: "medium",
  },
  {
    id: "l12-lstm-gates",
    lessonCode: "L12",
    lessonId: "amla-2026-05-29-project-xai-sequential",
    prompt: "Which statement best describes LSTM gates?",
    options: [
      "They learn what to store, forget and output from the cell state.",
      "They remove the need for data.",
      "They make memory unlimited.",
      "They are the same as decision-tree splits.",
    ],
    correct: 0,
    explanation: "Input, forget and output gates manage information flow through the LSTM.",
    tags: ["LSTM", "gates"],
    difficulty: "easy",
  },
  {
    id: "l12-vae-objective",
    lessonCode: "L12",
    lessonId: "amla-2026-05-29-project-xai-sequential",
    prompt: "Which statement best captures a VAE objective?",
    options: [
      "Balance reconstruction with latent regularization so sampling is meaningful.",
      "Only train a discriminator to detect fake samples.",
      "Only maximize pixel accuracy.",
      "Only choose random forest split thresholds.",
    ],
    correct: 0,
    explanation: "VAEs combine reconstruction loss with a latent-space regularization term.",
    tags: ["VAE", "latent space"],
    difficulty: "medium",
  },
  {
    id: "l12-gan-training",
    lessonCode: "L12",
    lessonId: "amla-2026-05-29-project-xai-sequential",
    prompt: "In GAN training, what happens during the generator phase?",
    options: [
      "The generator is updated to produce samples that the discriminator classifies as real.",
      "Only real images are edited manually.",
      "The discriminator is permanently deleted.",
      "The tokenizer is trained with BPTT.",
    ],
    correct: 0,
    explanation: "The generator improves through feedback from the discriminator.",
    tags: ["GAN", "generator"],
    difficulty: "medium",
  },
  {
    id: "l12-transformer-attention",
    lessonCode: "L12",
    lessonId: "amla-2026-05-29-project-xai-sequential",
    prompt: "What is the key conceptual shift from RNN language models to transformers?",
    options: [
      "Attention lets token representations relate directly to other tokens in context.",
      "Transformers are just decision trees with more leaves.",
      "Transformers remove embeddings.",
      "RNN hidden state becomes the only context source.",
    ],
    correct: 0,
    explanation: "The lecture highlights attention as the hinge between older sequence models and modern LLMs.",
    tags: ["transformers", "attention"],
    difficulty: "medium",
  },
];

const lessonLookup = new Map(AMLA_LESSONS.map((lesson) => [lesson.id, lesson]));
const DIFFICULTY_FILTERS = ["all", "easy", "medium", "hard"];

const QUESTION_OPTION_FEEDBACK = {
  "l01-advanced-expectation": [
    "AMLA does not restart Python or scikit-learn from zero; it assumes that base and moves faster.",
    "Basic ML is treated as prior knowledge, while AMLA adds neural networks, notebooks, and interpretation.",
    "Theory matters, but the course also expects notebook work and implementation choices.",
    "A metric without interpretation is not enough for Advanced-level project reasoning.",
  ],
  "l01-perceptron-linear-boundary": [
    "A perceptron does have trainable weights; the limitation is the kind of boundary it can represent.",
    "A single thresholded linear combination creates only one line or hyperplane, so XOR is not separable.",
    "Perceptrons can accept numeric inputs; the failure is geometric, not about input type.",
    "A perceptron can be used for classification; it is not restricted to continuous regression.",
  ],
  "l01-activation-depth": [
    "Depth without nonlinear activations still composes linear maps, so it does not create nonlinear behavior.",
    "Linear layers stacked together collapse to one linear transformation.",
    "Adding Dense layers does not make the model recurrent; recurrence requires feedback through time.",
    "Gradient descent can still run, but the model capacity is still effectively linear.",
  ],
  "l01-playground-overfit": [
    "Low loss alone can hide memorization or unstable boundaries, especially in visual toy data.",
    "Validation behavior and boundary shape show whether the model is learning a general pattern.",
    "Removing all hidden layers may underfit; the issue is not simply the presence of depth.",
    "Linear activation is not a general solution and may fail on nonlinear patterns.",
  ],
  "l01-feature-representation": [
    "A better representation can transform a hard boundary into an easier one for the learner.",
    "Deep learning does not forbid feature engineering; representation choices still matter.",
    "Squared features help this example, but they are not universally optimal.",
    "Labels are still required for supervised classification; features only change the input space.",
  ],
  "l01-bias-term": [
    "The bias acts like an intercept, shifting the activation threshold independently of inputs.",
    "A residual is an error term after prediction, not a learned shift in the neuron.",
    "A p-value belongs to statistical testing, not the neuron equation.",
    "A validation split is a data partition, not a parameter in the neuron.",
  ],
  "l02-framework-choice": [
    "These libraries overlap in ML workflows, but they are not interchangeable names for one tool.",
    "The framework affects baselines, neural-network construction, pretrained models, and project workflow.",
    "TensorFlow is important in the course, but it is not the only framework capable of training networks.",
    "Hugging Face is mainly about pretrained models and modern ML tooling, not spreadsheet analysis.",
  ],
  "l02-keras-relationship": [
    "Keras is the high-level API used to define, compile, train, and evaluate models.",
    "Numerical arrays are handled by tensor libraries; Keras is not a replacement for arrays.",
    "Keras can produce training curves, but it is not only a plotting package.",
    "Keras can run on accelerated backends; it does not prevent GPUs or tensors.",
  ],
  "l02-sequential-api": [
    "Sequential is ideal when layers form one straight stack from input to output.",
    "Branches and multiple inputs are better expressed with the Functional API.",
    "The input shape still needs to be known or inferable for proper model construction.",
    "A Sequential model still needs training through compile and fit.",
  ],
  "l02-functional-api": [
    "A simple two-layer Dense classifier is usually clean enough for Sequential.",
    "Branches, merges, and multiple inputs require graph-style model definition, which Functional supports.",
    "Training for one epoch is a training choice, not a reason to use Functional API.",
    "The number of output classes does not by itself require Functional API.",
  ],
  "l02-compile-fit-order": [
    "You cannot fit before defining and compiling the model training recipe.",
    "This is the standard Keras sequence: define architecture, compile, train, then evaluate.",
    "Evaluation comes after training; it cannot be the first step.",
    "Compilation happens before fit, but evaluation still belongs after training.",
  ],
  "l02-validation-split": [
    "Keras withholds that fraction of training data to monitor validation metrics during fitting.",
    "Test data should not update weights; it is kept for final evaluation.",
    "The value is a data split fraction, not the learning rate.",
    "It does not freeze 90% of parameters; it splits the training examples.",
  ],
  "l03-mnist-continuity": [
    "The dataset stays the same so the workflow change is easier to see.",
    "MNIST continuity lets students compare model setup, training, and diagnostics without changing the task.",
    "MNIST still requires preprocessing choices, model design, and evaluation.",
    "MNIST can be approached with classical ML; the course uses it to teach neural workflows.",
  ],
  "l03-softmax-output": [
    "MNIST has ten digit classes, so ten softmax units represent class probabilities.",
    "Binary regression would not use a ten-unit softmax head.",
    "Output units represent classes, not the first pixels of the image.",
    "Softmax still requires labels during supervised training.",
  ],
  "l03-flatten-shape": [
    "Flatten converts a 28x28 grid into a vector that Dense layers can process.",
    "Flatten changes shape, not the grayscale intensity values themselves.",
    "Convolution uses spatial filters; flattening is not convolution.",
    "Train/test splitting is a data workflow step, not the role of Flatten.",
  ],
  "l03-history-curves": [
    "Falling training loss with rising validation loss is a classic overfitting signal.",
    "Underfitting would usually show poor training performance too.",
    "Validation loss is useful because it estimates behavior on unseen data during training.",
    "A worse validation curve does not guarantee the test set will improve.",
  ],
  "l03-evaluate-vs-fit": [
    "Validation guides training monitoring; final evaluation estimates held-out performance.",
    "Evaluation should not update weights; it measures the trained model.",
    "Validation data still has labels, otherwise the metric could not be computed.",
    "They can be numerically different because they use different data and purposes.",
  ],
  "l03-loss-choice": [
    "Sparse categorical crossentropy matches integer class labels and a multiclass softmax output.",
    "MSE is not the natural loss for integer multiclass classification with softmax.",
    "Binary crossentropy with one output is for binary tasks, not ten MNIST digits.",
    "Dice loss is for segmentation mask overlap, not ordinary digit classification.",
  ],
  "l04-forward-prop": [
    "Forward propagation applies weights, biases, and activations layer by layer to produce predictions.",
    "Labels are provided by the dataset; they are not randomly assigned during prediction.",
    "Validation data does not replace model weights during forward propagation.",
    "Earlier layers compute intermediate representations; the final layer is not the only active layer.",
  ],
  "l04-bias-unit": [
    "A bias lets the unit shift its threshold instead of forcing all boundaries through the origin.",
    "Bias does not remove the need for hidden layers in nonlinear problems.",
    "Bias helps flexibility, but it does not guarantee zero training error.",
    "Adding a bias does not turn classification into clustering.",
  ],
  "l04-xnor-hidden-layer": [
    "Hidden layers can combine simpler separations to model patterns a single perceptron cannot.",
    "Hidden layers change representational capacity; they are not decorative.",
    "XNOR is a neural-network motivation example, not something only trees can solve.",
    "Linear activations would remove the nonlinear advantage of hidden layers.",
  ],
  "l04-decision-tree-value": [
    "Trees are useful as interpretable baselines and as contrast with neural decision logic.",
    "Decision trees and MLPs are different model families with different structures.",
    "Trees do not always outperform deep learning on image problems.",
    "Data splits remain necessary for honest evaluation.",
  ],
  "l04-cart-splits": [
    "CART predicts by moving through feature-threshold decisions until a leaf is reached.",
    "Softmax over pixels is unrelated to tree traversal.",
    "Unrolling hidden state is an RNN idea, not a CART prediction path.",
    "Latent Gaussian sampling belongs to generative models such as VAEs, not CART.",
  ],
  "l04-tree-overfit": [
    "Tiny unstable leaves usually mean the tree is too deep or insufficiently regularized.",
    "BatchNorm is a neural-network normalization layer, not the tree issue here.",
    "A softmax unit belongs to neural classifiers, not decision-tree leaves.",
    "A perfect but unstable tree is overparameterized for the data, not underparameterized.",
  ],
  "l05-output-heads": [
    "Single-label multiclass classification uses one probability distribution over classes.",
    "One linear unit would fit regression or a scalar output, not multiclass class probabilities.",
    "A sigmoid per pixel is a segmentation-style output, not single-label classification.",
    "An output activation is usually needed to interpret class probabilities.",
  ],
  "l05-bp-vs-gd": [
    "Backpropagation calculates gradients; gradient descent uses those gradients to update weights.",
    "They are connected parts of the same training loop.",
    "Gradient descent does not create labels or split data.",
    "Backpropagation supplies information to the optimizer; it does not replace it.",
  ],
  "l05-epoch-minibatch": [
    "One epoch means the training loop has seen the full training set once.",
    "One individual sample is an example, not an epoch.",
    "A neuron is a model unit, not a training pass.",
    "A validation metric is measured during training; it is not an epoch.",
  ],
  "l05-tensor-rank": [
    "Tensor rank describes how many axes the data has, which determines layer compatibility.",
    "Rank does not replace the loss; loss defines the training objective.",
    "Class names come from labels or metadata, not tensor rank.",
    "Correct shape handling prevents errors, but it does not prevent overfitting by itself.",
  ],
  "l05-dense-operation": [
    "Dense layers compute a matrix product, add bias, then apply an activation.",
    "Sorting labels is a preprocessing or bookkeeping operation, not Dense computation.",
    "Cropping and pooling are image operations, not Dense-layer math.",
    "A discriminator belongs to GAN training, not a Dense layer operation.",
  ],
  "l05-learning-rate": [
    "Learning rate sets update size, affecting convergence speed and stability.",
    "Train/test split is a data partition choice, not an optimizer parameter.",
    "The number of output classes is determined by the task and output head.",
    "Evaluation is still needed; learning rate does not replace it.",
  ],
  "l06-local-receptive-fields": [
    "CNNs exploit the fact that local pixel neighborhoods often contain meaningful patterns.",
    "Full connectivity ignores the spatial efficiency that convolutions introduce.",
    "CNNs are designed specifically to use image structure.",
    "Convolutions operate on grids such as images; text tokens are a different representation.",
  ],
  "l06-weight-sharing": [
    "A shared filter can detect the same pattern in different positions with fewer parameters.",
    "Weight sharing does not force every output to be identical; outputs depend on local input patches.",
    "Activation functions are still used after convolutional operations.",
    "Convolution creates features; labels still require a trained classifier head and supervision.",
  ],
  "l06-padding-stride": [
    "Larger stride and no padding reduce how many spatial positions are computed.",
    "Stride and padding change feature-map geometry, not the number of classes.",
    "Convolution settings do not colorize the input image.",
    "Stride does not make the architecture recurrent.",
  ],
  "l06-pooling-purpose": [
    "Pooling downsamples spatial maps while retaining strong local responses.",
    "Pooling alone cannot generate class labels without trained downstream layers.",
    "Pooling complements convolution; it does not replace every convolutional layer.",
    "Pooling is not a time-series forecasting conversion.",
  ],
  "l06-filter-visualization": [
    "Feature maps show activations, but they are partial evidence rather than full model reasoning.",
    "A feature map does not prove fairness or absence of bias.",
    "Visualization supports diagnostics; it does not replace validation metrics.",
    "Activated visual patterns are not automatic causal biological mechanisms.",
  ],
  "l06-architecture-tour": [
    "The goal is to recognize reusable CNN design ideas and pretrained-model context.",
    "CNN architectures differ substantially in depth, blocks, skip connections, and design choices.",
    "Pretrained CNNs can help projects, but they do not eliminate baselines.",
    "Validation data remains necessary for model selection and evaluation.",
  ],
  "l07-ae-purpose": [
    "Autoencoders learn to reconstruct inputs through a constrained or structured latent code.",
    "Classification into fixed labels is supervised learning, not the basic autoencoder objective.",
    "Discriminator loss belongs to GANs, not basic autoencoder training.",
    "Decision-tree splits are unrelated to encoder-decoder reconstruction.",
  ],
  "l07-denoising-ae": [
    "Denoising trains the model to recover clean structure from corrupted inputs.",
    "Noise is used during training; the target is not to keep adding noise forever.",
    "Random numbers do not provide the clean target needed for denoising.",
    "A discriminator-generator setup describes GANs, not denoising autoencoders.",
  ],
  "l07-sparse-ae": [
    "Sparsity encourages only a small set of latent units to activate, making representation selective.",
    "Sparsity is a pressure, not a guarantee of perfect reconstruction.",
    "Removing the decoder would remove the reconstruction path.",
    "A sparse autoencoder remains an autoencoder, not a random forest.",
  ],
  "l07-svm-margin": [
    "SVMs choose a boundary that maximizes margin relative to support vectors.",
    "Depth is a neural-network concept and does not define the SVM margin.",
    "Points near the boundary are the most important for the margin.",
    "Softmax is not the defining mechanism of an SVM.",
  ],
  "l07-kernel-trick": [
    "Kernels allow nonlinear separation by computing similarities as if in a richer feature space.",
    "SVMs still have hyperparameters such as C and kernel settings.",
    "Kernels are not limited to image data.",
    "PCA may still be useful; the kernel trick does not make it unnecessary in every case.",
  ],
  "l07-pca-purpose": [
    "PCA finds directions of high variance for compression, visualization, or preprocessing.",
    "Segmentation masks are a pixel-wise vision output, not PCA.",
    "Recurrent hidden states belong to sequence models.",
    "PCA can support analysis, but it does not replace evaluation.",
  ],
  "l08-voting-ensemble": [
    "Voting ensembles combine multiple model predictions into one final decision.",
    "Training without labels is not the definition of a voting ensemble.",
    "A single neuron is one model component, not an ensemble.",
    "Generating images from noise belongs to generative models, not voting.",
  ],
  "l08-hard-soft-voting": [
    "Hard voting counts class predictions; soft voting averages or combines probabilities.",
    "The difference is prediction aggregation, not which model family is trained.",
    "The distinction is independent of whether inputs are images or text.",
    "There is a clear difference: labels versus probabilities.",
  ],
  "l08-bagging": [
    "Bagging trains separate models on bootstrap samples and averages or votes their outputs.",
    "Making one tree deeper usually increases overfitting rather than reducing variance.",
    "Randomization is central to bagging.",
    "The test set should not be used for training bagged models.",
  ],
  "l08-random-forest": [
    "Random forests sample candidate features at splits to make trees less correlated.",
    "Trees still require training data.",
    "Random forests are ensembles of trees, not RNNs.",
    "Labels are required for supervised random-forest training.",
  ],
  "l08-boosting": [
    "Boosting trains learners sequentially, focusing later learners on previous errors.",
    "Independent bootstrap training describes bagging more than boosting.",
    "Boosting can overfit if too complex or poorly regularized.",
    "Boosting is general and not limited to image segmentation.",
  ],
  "l08-stacking": [
    "Stacking must avoid target leakage when training the meta-model on base predictions.",
    "Having multiple base models is the point of stacking, not the main risk.",
    "Validation data can be used carefully; the issue is leakage, not validation itself.",
    "Stacking can use tabular features; feature type is not the core risk.",
  ],
  "l09-fluocells-difficulty": [
    "Fluocells is hard because image quality, overlap, artifacts, and boundaries affect object counts.",
    "The images do not contain one perfectly centered cell; crowding is part of the problem.",
    "Labels or masks are needed to train and evaluate counting or segmentation methods.",
    "Intensity varies and creates thresholding and segmentation difficulty.",
  ],
  "l09-threshold-baseline": [
    "A threshold baseline gives a simple reference and reveals image or metric problems early.",
    "A simple threshold is not guaranteed to be the best model.",
    "Thresholding does not remove the need for masks or ground-truth comparison.",
    "Thresholding operates on image intensity, not text tokens.",
  ],
  "l09-pixel-accuracy-trap": [
    "Background dominance can make pixel accuracy high even when cells are missed.",
    "Pixel accuracy and Dice measure different things.",
    "High pixel accuracy does not guarantee correct object-level counting.",
    "The metric problem is about class imbalance, not RNN architecture.",
  ],
  "l09-segmentation-vs-counting": [
    "Segmentation can produce cell regions that are then counted or post-processed.",
    "Segmentation still needs evaluation against masks or object-level targets.",
    "Segmentation predicts spatial masks, not one scalar by definition.",
    "PCA reduces dimensions; it is not segmentation.",
  ],
  "l09-mask-quality": [
    "Semi-automatic or expert-refined masks can contain noise and subjective boundaries.",
    "Masks are not automatically perfect ground truth just because experts refine them.",
    "Validation is still required to estimate how the model behaves on new images.",
    "Noisy masks complicate training, but they do not make training impossible.",
  ],
  "l09-eda-before-model": [
    "EDA should characterize image shape, intensity, artifacts, class balance, and label examples.",
    "Leaderboard rank comes after modeling and does not explain the data.",
    "Epoch count is a training setting, not EDA.",
    "Optimizer choice is not enough to understand the image dataset.",
  ],
  "l10-semantic-segmentation": [
    "Semantic segmentation assigns a class such as cell or background to each pixel.",
    "One class for the whole image is image classification, not segmentation.",
    "Text generation is unrelated to pixel-wise Fluocells masks.",
    "Clustering tabular patients is not semantic image segmentation.",
  ],
  "l10-instance-vs-semantic": [
    "Instance segmentation separates individual objects, which maps more directly to counting cells.",
    "Ignoring masks would remove the spatial supervision needed for segmentation.",
    "Instance segmentation still uses images.",
    "BatchNorm is a normalization layer, not an instance segmentation synonym.",
  ],
  "l10-cresunet": [
    "Skip connections recover spatial detail while using deep contextual features.",
    "U-Net and c-ResUNet are convolutional architectures, not replacements for convolution.",
    "Masks are spatial outputs, not text.",
    "Skip connections do not remove the need for training data.",
  ],
  "l10-dataloaders": [
    "Segmentation DataLoaders must apply matching transforms to images and masks.",
    "Weights and optimizer names are training objects, not paired input supervision.",
    "Class names and extensions do not ensure image-mask alignment.",
    "Images are essential; labels alone are not a segmentation batch.",
  ],
  "l10-augmentation-trap": [
    "If the image is cropped but the mask is not, the target no longer matches the input.",
    "Cropping can help only when applied correctly to both image and mask.",
    "Masks need the same spatial transformations as their images.",
    "The loss cannot fix corrupted supervision caused by misaligned masks.",
  ],
  "l10-dice-loss": [
    "Dice focuses on overlap, which helps when background pixels dominate.",
    "Dice loss still requires masks to compute overlap.",
    "Dice is for segmentation overlap, not language modeling.",
    "Augmentation and loss solve different parts of the training problem.",
  ],
  "l11-interpretability-xai": [
    "Interpretability concerns understandability; XAI provides methods to explain less transparent models.",
    "The terms are related but not identical in every context.",
    "Explainability is about model behavior, not just plotting accuracy.",
    "Interpretability can reveal bias, but it does not remove it automatically.",
  ],
  "l11-global-local": [
    "A SHAP summary plot aggregates feature influence across many observations.",
    "One pixel mask for one image would be a local vision explanation, not a global summary.",
    "Recurrent hidden state is a sequence-model mechanism, not SHAP summary interpretation.",
    "A train/test split is data partitioning, not an explanation plot.",
  ],
  "l11-local-explanation": [
    "A single prediction may depend on features differently from the global average.",
    "Global explanations can be useful; they are just not sufficient for every case.",
    "Local explanations inspect a model prediction; they do not replace the trained model.",
    "Local explanations still require the instance and model behavior.",
  ],
  "l11-lime-surrogate": [
    "LIME approximates the model near one instance with a simpler interpretable surrogate.",
    "A GAN discriminator is part of adversarial generative training, not LIME.",
    "RNN hidden-state normalization is unrelated to local surrogate explanations.",
    "PCA directions describe variance, not local model behavior around a prediction.",
  ],
  "l11-xai-pitfall": [
    "An explanation plot is evidence to inspect, not proof that the model is correct or unbiased.",
    "Stating local or global scope is good reporting practice.",
    "Comparing methods can strengthen interpretation when assumptions are discussed.",
    "Using XAI on failures is useful for diagnosing model behavior.",
  ],
  "l11-shap-disagreement": [
    "Different explanations should trigger investigation of assumptions, locality, and data context.",
    "Choosing the prettier plot is not a defensible scientific response.",
    "Disagreement does not make both methods useless; it exposes assumptions to examine.",
    "Accuracy alone cannot explain why the model made that prediction.",
  ],
  "l12-rnn-input-shape": [
    "RNN inputs are organized as batches of sequences, each with steps and feature dimensionality.",
    "Height, width, channels is the usual image tensor framing for CNNs.",
    "Classes and probabilities describe outputs, not sequence input shape.",
    "Features, labels, and loss are training concepts, not the RNN input tensor shape.",
  ],
  "l12-bptt": [
    "Long unrolled sequences behave like deep graphs, making gradients vanish or explode.",
    "RNNs do have trainable parameters.",
    "Backpropagation through time is specifically how RNNs are trained.",
    "Sequence data is ordered; the order is exactly why recurrence matters.",
  ],
  "l12-lstm-gates": [
    "LSTM gates regulate what information is stored, forgotten, and exposed from the cell state.",
    "Gates improve memory handling but do not remove the need for data.",
    "LSTM memory is controlled, not unlimited.",
    "Decision-tree splits are threshold rules, not recurrent gates.",
  ],
  "l12-vae-objective": [
    "A VAE balances reconstruction quality with a regularized latent space for meaningful sampling.",
    "Training only a discriminator describes GANs, not VAEs.",
    "Pixel accuracy alone does not define the VAE objective.",
    "Random forest split thresholds are unrelated to latent generative modeling.",
  ],
  "l12-gan-training": [
    "During the generator phase, the generator learns to make outputs that fool the discriminator.",
    "Manual editing of real images is not GAN generator training.",
    "The discriminator remains part of adversarial training; it is not deleted.",
    "Tokenizers and BPTT belong to sequence/language workflows, not the generator update.",
  ],
  "l12-transformer-attention": [
    "Attention lets tokens directly condition on other tokens, rather than relying only on recurrent state.",
    "Transformers are not decision trees; attention is the central mechanism.",
    "Transformers still use embeddings to represent tokens.",
    "RNN hidden state is the older context mechanism; transformers move beyond relying only on it.",
  ],
};

export const MOCK_EXAM_QUESTIONS = [
  {
    id: "mock-svm-hard-soft-margin",
    lessonCode: "L07",
    lessonId: "amla-2026-05-08-model-regularization",
    prompt: "Which of the following is true about hard and soft margin violations in SVM?",
    options: [
      "Hard margin is not very sensitive to outliers.",
      "Soft margin is very sensitive to outliers.",
      "Soft margin works only if the data is linearly separable.",
      "Hard margin works only if the data is linearly separable.",
    ],
    correct: 3,
    explanation: "Hard-margin SVM requires perfectly linearly separable data because it allows no margin violations.",
    optionFeedback: [
      "Hard margin is actually very sensitive to outliers, because one unusual point can make the strict separating margin impossible or unstable.",
      "Soft margin is designed to be less brittle by allowing controlled margin violations through the C parameter.",
      "Soft margin is useful precisely because it can handle non-perfectly separable data by tolerating violations.",
      "Hard margin allows no violations, so it only works when the classes can be separated linearly.",
    ],
    tags: ["SVM", "margin"],
    difficulty: "medium",
  },
  {
    id: "mock-nonlinear-activation",
    lessonCode: "L01",
    lessonId: "amla-2026-04-16-intro-advanced",
    prompt: "Which of the following cannot be a non-linear activation function in a neural network architecture?",
    options: ["max(0, z)", "tanh(z)", "A step function", "mz, with m being a real number"],
    correct: 3,
    explanation: "mz is a linear function of z, so it cannot provide the nonlinearity needed to increase network expressiveness.",
    optionFeedback: [
      "max(0, z) is ReLU. It is nonlinear because negative values collapse to zero while positive values pass through.",
      "tanh(z) is nonlinear because it squashes inputs into a bounded curved response.",
      "A step function is nonlinear because it jumps from one output level to another at a threshold.",
      "mz is just a scaled version of z. Scaling alone is linear and does not add nonlinear representational power.",
    ],
    tags: ["activation functions", "nonlinearity"],
    difficulty: "easy",
  },
  {
    id: "mock-svm-history",
    lessonCode: "L07",
    lessonId: "amla-2026-05-08-model-regularization",
    prompt: "In AI history, Support Vector Machines:",
    options: [
      "Were the first working example of unsupervised learning.",
      "Were conceived in the 1960s, but soon abandoned in favor of neural networks.",
      "Were the first working example of supervised learning.",
      "Were conceived in the 1990s and have had remarkable success since then.",
    ],
    correct: 3,
    explanation: "The course frames SVMs as a major supervised-learning success from the 1990s statistical-learning era.",
    optionFeedback: [
      "SVMs are supervised methods because they learn separating boundaries from labeled data.",
      "Earlier theory existed, but the successful SVM formulation is associated with the 1990s, not abandonment in the 1960s.",
      "Supervised learning existed before SVMs; SVMs were not the first working example.",
      "Modern SVMs emerged in the 1990s and became highly successful, especially before the recent deep-learning wave.",
    ],
    tags: ["SVM", "history"],
    difficulty: "medium",
  },
  {
    id: "mock-linear-svm-scikit",
    lessonCode: "L07",
    lessonId: "amla-2026-05-08-model-regularization",
    prompt: "Which of the following is true about linear SVM in scikit-learn?",
    options: [
      "It can be implemented only with LinearSVC by setting the kernel parameter to \"linear\".",
      "It requires a Gaussian, polynomial, or sigmoid kernel to be implemented.",
      "It can be implemented with LinearSVC or the SVC class.",
      "It cannot be implemented, and Keras is needed.",
    ],
    correct: 2,
    explanation: "scikit-learn supports linear SVMs through LinearSVC and also through SVC with a linear kernel.",
    optionFeedback: [
      "LinearSVC is one option, but it does not work by setting a kernel parameter in the same way as SVC.",
      "Gaussian, polynomial, and sigmoid kernels are alternatives for nonlinear SVMs; a linear SVM does not require them.",
      "A linear SVM can be trained with LinearSVC or with SVC using a linear kernel.",
      "Keras is not required for linear SVMs; scikit-learn directly provides SVM implementations.",
    ],
    tags: ["SVM", "scikit-learn"],
    difficulty: "easy",
  },
  {
    id: "mock-soft-voting",
    lessonCode: "L08",
    lessonId: "amla-2026-05-15-cnn-practice",
    prompt: "In ensemble techniques, when using soft voting, you predict the class:",
    options: [
      "With the highest class probability averaged over the individual classifiers.",
      "With lower generalization errors.",
      "That takes the most votes.",
      "That has more examples.",
    ],
    correct: 0,
    explanation: "Soft voting combines predicted class probabilities and chooses the class with the highest averaged probability.",
    optionFeedback: [
      "Soft voting averages class probabilities from the individual classifiers and selects the highest average.",
      "Lower generalization error is a goal of ensembles, not the rule used to choose the class in soft voting.",
      "Taking the most predicted class labels describes hard voting, not soft voting.",
      "The number of training examples in a class is not the soft-voting prediction rule.",
    ],
    tags: ["voting", "probabilities"],
    difficulty: "easy",
  },
  {
    id: "mock-deep-learning-success",
    lessonCode: "L01",
    lessonId: "amla-2026-04-16-intro-advanced",
    prompt: "Which of the following is not a key reason for the recent success of deep neural networks?",
    options: [
      "The availability of large volumes and variety of data.",
      "The existence of general-purpose GPUs.",
      "The power of high-throughput computing.",
      "The ability to access computational resources via cloud interfaces.",
    ],
    correct: 2,
    explanation: "The standard course reasons are data availability, GPUs, and accessible compute; high-throughput computing is less central in this framing.",
    optionFeedback: [
      "Large and varied datasets are one of the main drivers of modern deep-learning success.",
      "General-purpose GPUs made large neural-network training much more practical.",
      "High-throughput computing is not usually listed as a key deep-learning breakthrough in the same way as data, GPUs, and cloud access.",
      "Cloud interfaces made powerful compute easier to access without owning the hardware locally.",
    ],
    tags: ["deep learning", "course setup"],
    difficulty: "medium",
  },
  {
    id: "mock-xgboost",
    lessonCode: "L08",
    lessonId: "amla-2026-05-15-cnn-practice",
    prompt: "XGBoost is:",
    options: [
      "An algorithm able to beat all neural networks in computer vision tasks.",
      "An optimized implementation of gradient boosting.",
      "A bagging/pasting version of random forest.",
      "A boosted version of gradient descent.",
    ],
    correct: 1,
    explanation: "XGBoost is an efficient, regularized implementation of gradient boosting.",
    optionFeedback: [
      "XGBoost is strong on many tabular tasks, but it is not a universal replacement for neural networks in computer vision.",
      "XGBoost implements gradient boosting efficiently, with practical optimizations and regularization.",
      "Random forests are bagging-style ensembles; XGBoost belongs to boosting, not bagging.",
      "Gradient descent is an optimizer; XGBoost boosts weak learners, usually decision trees.",
    ],
    tags: ["boosting", "XGBoost"],
    difficulty: "easy",
  },
  {
    id: "mock-bagging-definition",
    lessonCode: "L08",
    lessonId: "amla-2026-05-15-cnn-practice",
    prompt: "Bagging refers to:",
    options: [
      "An algorithm usable only for regression.",
      "An ensemble method.",
      "An algorithm usable only for classification.",
      "A neural network architecture.",
    ],
    correct: 1,
    explanation: "Bagging is an ensemble method that trains models on bootstrap samples and aggregates their predictions.",
    optionFeedback: [
      "Bagging can be used for regression, but it is not limited to regression.",
      "Bagging is an ensemble method based on bootstrap sampling and aggregation.",
      "Bagging can be used for classification, but it is not limited to classification.",
      "Bagging is not a neural-network architecture; it is a way to combine multiple models.",
    ],
    tags: ["bagging", "ensemble"],
    difficulty: "easy",
  },
  {
    id: "mock-oldest-cnn",
    lessonCode: "L06",
    lessonId: "amla-2026-05-07-training-diagnostics",
    prompt: "Which of the following is the oldest CNN architecture?",
    options: ["AlexNet", "ResNet", "GoogLeNet/Inception", "VGGNet"],
    correct: 0,
    explanation: "Among the listed architectures, AlexNet is the oldest major CNN architecture.",
    optionFeedback: [
      "AlexNet came earlier than VGGNet, GoogLeNet/Inception, and ResNet among these options.",
      "ResNet is newer and is associated with residual connections.",
      "GoogLeNet/Inception came after AlexNet and introduced inception-style modules.",
      "VGGNet is later than AlexNet and is known for stacked small convolutions.",
    ],
    tags: ["CNN", "architecture"],
    difficulty: "easy",
  },
  {
    id: "mock-pooling-purpose",
    lessonCode: "L06",
    lessonId: "amla-2026-05-07-training-diagnostics",
    prompt: "Pooling layers in CNNs for image processing are added in order to:",
    options: [
      "Take the maximum of the values in neighboring pixels of the image.",
      "Avoid the need to apply padding.",
      "Reduce dimensionality.",
      "Fight underfitting.",
    ],
    correct: 2,
    explanation: "Pooling reduces spatial dimensionality while retaining salient local information.",
    optionFeedback: [
      "Taking a maximum describes max pooling specifically, but the broader purpose of pooling layers is dimensionality reduction.",
      "Padding and pooling solve different shape issues; pooling does not remove the need for padding in general.",
      "Pooling reduces the spatial size of feature maps, lowering dimensionality and computation.",
      "Pooling can regularize slightly, but it is not mainly added to fight underfitting.",
    ],
    tags: ["pooling", "CNN"],
    difficulty: "easy",
  },
];

function optionLabel(index) {
  return String.fromCharCode(65 + index);
}

function incorrectOptionExplanation(question, option) {
  const text = option.toLowerCase();
  const tags = (question.tags || []).join(" ").toLowerCase();

  if (/only|always|never|guarantees|necessarily|definitely/.test(text)) {
    return "La afirmación es demasiado absoluta. En estos modelos casi siempre importan las condiciones de entrenamiento, los datos y la validación.";
  }
  if (/no |not |cannot|forbidden|prevents|removes the need/.test(text)) {
    return "La respuesta elimina una parte del flujo que todavía es necesaria. El método puede reducir un problema, pero no hace desaparecer el requisito conceptual.";
  }
  if (/manual|human|spreadsheet|deleted|random|permanently/.test(text)) {
    return "Describe una intervención manual o poco realista. El curso evalúa si el procedimiento de ML justifica el resultado con entrenamiento, métricas e interpretación.";
  }
  if (/test data|validation|split|evaluate|metric|accuracy|loss/.test(text)) {
    return "Habla de evaluación o monitoreo. Eso sirve para diagnosticar el modelo, pero no define el mecanismo central preguntado.";
  }
  if (/gpu|tensor|array|pixel|input shape|parameters/.test(text)) {
    return "Se centra en un detalle de implementación. Es relevante al programar, pero no responde la diferencia conceptual que pide la pregunta.";
  }
  if (/labels|classification|class|binary/.test(text)) {
    return "Lleva la respuesta hacia clasificación supervisada. Aquí lo importante es el origen de la señal de aprendizaje o la estructura del modelo.";
  }
  if (/tree|svm|pca|cnn|rnn|transformer|gan|vae|autoencoder|keras|pytorch|tensorflow|hugging face/.test(text)) {
    return "Nombra una herramienta o familia de modelos relacionada, pero no explica la propiedad específica que la pregunta está evaluando.";
  }

  if (/perceptron|linear/.test(tags)) {
    return "Un perceptrón simple representa una frontera lineal. La alternativa no explica esa limitación geométrica.";
  }
  if (/activation|nonlinearity/.test(tags)) {
    return "La clave es que la activación no lineal cambia la capacidad del modelo. Profundidad sin no linealidad sigue siendo una composición lineal.";
  }
  if (/overfitting|diagnostics|history/.test(tags)) {
    return "La respuesta no usa la evidencia de generalización. En AMLA hay que comparar entrenamiento, validación y comportamiento visual.";
  }
  if (/keras|sequential|functional|workflow|model.fit/.test(tags)) {
    return "La alternativa no respeta el flujo de Keras. Primero se define la arquitectura, luego se compila, se entrena y se evalúa.";
  }
  if (/mnist|softmax|input shape/.test(tags)) {
    return "No conecta la arquitectura con la forma de MNIST: imagen de entrada, vectorización o salida de diez clases según corresponda.";
  }
  if (/forward|backprop|optimizer|learning rate/.test(tags)) {
    return "La respuesta no separa cálculo hacia adelante, cálculo de gradientes y actualización de pesos.";
  }
  if (/decision tree|entropy|gini|split/.test(tags)) {
    return "No describe cómo el árbol decide cortes. La idea central es reducir impureza o mejorar separación en cada nodo.";
  }
  if (/cnn|convolution|pooling|filter/.test(tags)) {
    return "No explica la operación espacial. En CNNs importan filtros locales, mapas de activación y reducción controlada de resolución.";
  }
  if (/autoencoder|latent|denoising/.test(tags)) {
    return "No describe bien la relación entrada-objetivo. Un autoencoder aprende una representación latente útil para reconstruir o denoising.";
  }
  if (/svm|kernel|margin|support vector/.test(tags)) {
    return "No corresponde a la lógica del margen. En SVM importan los puntos cercanos a la frontera, el parámetro C y el kernel.";
  }
  if (/pca|dimensionality/.test(tags)) {
    return "No refleja PCA: se busca una proyección que preserve varianza, no una etiqueta ni una frontera de clasificación.";
  }
  if (/ensemble|bagging|boosting|random forest/.test(tags)) {
    return "No distingue cómo se combinan modelos. Bagging reduce varianza; boosting corrige errores de forma secuencial.";
  }
  if (/fluocells|thresholding|segmentation/.test(tags)) {
    return "No encaja con el flujo Fluocells. Primero se razona sobre imagen, máscaras, segmentación y evidencia visual.";
  }
  if (/augmentation|loss|c-resunet|fastai/.test(tags)) {
    return "No apunta al entrenamiento de segmentación. Hay que relacionar pérdida, aumentación, máscaras y error espacial.";
  }
  if (/xai|shap|lime|explain/.test(tags)) {
    return "No responde como explicación interpretativa. XAI debe decir qué rasgos empujan una predicción y con qué alcance local o global.";
  }
  if (/rnn|bptt|lstm|gru/.test(tags)) {
    return "No refleja dependencia secuencial. En modelos recurrentes importa cómo el estado conserva información y cómo se propaga el gradiente.";
  }
  if (/gan|vae|generative|transformer|attention|llm/.test(tags)) {
    return "No identifica el mecanismo generativo o de atención correcto. La respuesta debe distinguir representación latente, adversarial training o atención.";
  }

  return "La respuesta apunta a una idea cercana, pero no explica el criterio central que hace correcta a la alternativa elegida.";
}

function optionFeedback(question, optionIndex, selected) {
  if (question.optionFeedback?.[optionIndex]) return question.optionFeedback[optionIndex];
  if (QUESTION_OPTION_FEEDBACK[question.id]?.[optionIndex]) return QUESTION_OPTION_FEEDBACK[question.id][optionIndex];
  if (optionIndex === question.correct) return question.explanation;
  return incorrectOptionExplanation(question, question.options[optionIndex], selected);
}

export function QuestionCard({ question, index, answer, setAnswer, showFeedback, locked }) {
  const answered = answer !== undefined;
  const lesson = lessonLookup.get(question.lessonId);

  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black text-red-700">Q{index + 1}</span>
        <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-black text-stone-600">{question.lessonCode}</span>
        <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-black text-stone-600">{question.difficulty}</span>
        {question.tags.map((tag) => <span key={tag} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-600">{tag}</span>)}
      </div>
      {lesson ? <a href={amlaLessonHref(lesson)} className="mt-3 inline-flex text-xs font-black uppercase tracking-[0.16em] text-red-700 hover:text-red-900">{lesson.title}</a> : null}
      <h2 className="mt-3 text-xl font-black leading-8 text-stone-950">{question.prompt}</h2>
      <div className="mt-4 grid gap-2">
        {question.options.map((option, optionIndex) => {
          const selected = answer === optionIndex;
          const correct = optionIndex === question.correct;
          const reveal = answered && showFeedback;
          const feedbackLabel = correct ? "Respuesta correcta" : selected ? "No exactamente" : "Explicación";
          return (
            <button
              key={option}
              type="button"
              disabled={locked}
              onClick={() => setAnswer(optionIndex)}
              className={`rounded-2xl border p-4 text-left text-sm font-bold leading-6 transition disabled:cursor-not-allowed ${
                reveal && correct
                  ? "border-emerald-300 bg-emerald-50 text-emerald-950"
                  : reveal && selected && !correct
                    ? "border-red-300 bg-red-50 text-red-950"
                    : selected
                      ? "border-stone-900 bg-stone-950 text-white"
                      : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-white"
              }`}
            >
              <span className="block">{optionLabel(optionIndex)}. {option}</span>
              {reveal ? (
                <span className={`mt-3 block border-t pt-3 text-xs font-semibold leading-6 ${
                  correct
                    ? "border-emerald-200 text-emerald-900"
                    : selected
                      ? "border-red-200 text-red-900"
                      : "border-stone-200 text-stone-600"
                }`}>
                  <span className="mb-1 block font-black uppercase tracking-[0.14em]">{feedbackLabel}</span>
                  {optionFeedback(question, optionIndex, selected)}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </article>
  );
}

export default function AMLAPracticeExamPage() {
  const [mode, setMode] = useState("practice");
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [lessonFilter, setLessonFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [tagFilter, setTagFilter] = useState("all");
  const [reviewMistakes, setReviewMistakes] = useState(false);

  const lessonFilters = useMemo(() => ["all", ...Array.from(new Set(QUESTIONS.map((question) => question.lessonCode)))], []);
  const tagFilters = useMemo(() => ["all", ...Array.from(new Set(QUESTIONS.flatMap((question) => question.tags))).sort((a, b) => a.localeCompare(b))], []);
  const score = useMemo(() => QUESTIONS.filter((question) => answers[question.id] === question.correct).length, [answers]);
  const answeredCount = Object.keys(answers).length;
  const locked = mode === "mock" && submitted;
  const showFeedback = mode === "practice" || submitted;
  const canReviewMistakes = answeredCount > 0 && score < answeredCount;
  const filteredQuestions = useMemo(() => QUESTIONS.filter((question) => {
    const lessonMatch = lessonFilter === "all" || question.lessonCode === lessonFilter;
    const difficultyMatch = difficultyFilter === "all" || question.difficulty === difficultyFilter;
    const tagMatch = tagFilter === "all" || question.tags.includes(tagFilter);
    const mistakeMatch = !reviewMistakes || answers[question.id] !== undefined && answers[question.id] !== question.correct;
    return lessonMatch && difficultyMatch && tagMatch && mistakeMatch;
  }), [answers, difficultyFilter, lessonFilter, reviewMistakes, tagFilter]);
  const byLesson = useMemo(() => AMLA_LESSONS.map((lesson) => {
    const lessonQuestions = QUESTIONS.filter((question) => question.lessonId === lesson.id);
    const answered = lessonQuestions.filter((question) => answers[question.id] !== undefined).length;
    const correct = lessonQuestions.filter((question) => answers[question.id] === question.correct).length;
    return { lesson, count: lessonQuestions.length, answered, correct };
  }), [answers]);

  const setAnswer = (questionId, value) => {
    if (locked) return;
    setAnswers((current) => ({ ...current, [questionId]: value }));
  };

  const reset = (nextMode = mode) => {
    setMode(nextMode);
    setAnswers({});
    setSubmitted(false);
    setReviewMistakes(false);
  };

  const clearFilters = () => {
    setLessonFilter("all");
    setDifficultyFilter("all");
    setTagFilter("all");
    setReviewMistakes(false);
  };

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <nav className="mb-6 rounded-[2rem] border border-stone-200 bg-white/85 p-3 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <a href="#/" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-sm font-black text-stone-800 transition hover:bg-stone-50">Back to AMLA dashboard</a>
          <div className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-stone-500">AMLA full-course exam</div>
          <a href="#question-bank" className="rounded-full bg-stone-950 px-4 py-2 text-center text-sm font-black text-white transition hover:bg-red-800">Start</a>
        </div>
      </nav>

      <section className="grid overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white/85 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
        <div className="bg-[#fbf4e8] p-8 md:p-12">
          <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">Full-course bank</div>
          <h1 className="mt-7 max-w-3xl text-5xl font-black tracking-tight text-stone-950 md:text-6xl">AMLA Practice Exam</h1>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-stone-700">
            Seventy-two reasoning-oriented multiple-choice questions covering all 12 AMLA lessons. Practice mode gives immediate feedback; mock mode reveals explanations only after submission.
          </p>
        </div>
        <aside className="border-t border-stone-200 bg-white p-8 lg:border-l lg:border-t-0 md:p-10">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-3xl border border-red-200 bg-red-50 p-5 text-red-800"><div className="text-xs font-black uppercase tracking-[0.18em] opacity-70">Questions</div><div className="mt-2 text-3xl font-black">{QUESTIONS.length}</div></div>
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Answered</div><div className="mt-2 text-3xl font-black text-stone-950">{answeredCount}</div></div>
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Score</div><div className="mt-2 text-3xl font-black text-stone-950">{score}</div></div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["practice", "mock"].map((option) => (
              <button key={option} type="button" onClick={() => reset(option)} className={`rounded-full border px-4 py-2 text-sm font-black ${mode === option ? "border-red-300 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-700"}`}>
                {option === "practice" ? "Practice mode" : "Mock exam"}
              </button>
            ))}
          </div>
          {mode === "mock" ? <button type="button" onClick={() => setSubmitted(true)} className="mt-4 rounded-full bg-stone-950 px-5 py-3 text-sm font-black text-white hover:bg-red-800">Submit mock</button> : null}
          {locked ? <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-black leading-7 text-emerald-950">Final score: {score} / {QUESTIONS.length}</p> : null}
          <a href="#/mock-exam" className="mt-3 inline-flex rounded-full border border-red-200 bg-red-50 px-5 py-3 text-sm font-black text-red-700 transition hover:bg-red-100">Open mock exam sample</a>
          <button
            type="button"
            onClick={() => setReviewMistakes((current) => !current)}
            disabled={!canReviewMistakes}
            className="mt-3 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-black text-stone-700 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-45"
          >
            {reviewMistakes ? "Show all filtered questions" : "Review mistakes"}
          </button>
        </aside>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-5 shadow-sm">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Filters</div>
          <div className="mt-4 grid gap-3">
            <label className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">
              Lesson
              <select value={lessonFilter} onChange={(event) => setLessonFilter(event.target.value)} className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-bold normal-case tracking-normal text-stone-700">
                {lessonFilters.map((value) => <option key={value} value={value}>{value === "all" ? "All lessons" : value}</option>)}
              </select>
            </label>
            <label className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">
              Difficulty
              <select value={difficultyFilter} onChange={(event) => setDifficultyFilter(event.target.value)} className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-bold normal-case tracking-normal text-stone-700">
                {DIFFICULTY_FILTERS.map((value) => <option key={value} value={value}>{value === "all" ? "All difficulties" : value}</option>)}
              </select>
            </label>
            <label className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">
              Topic tag
              <select value={tagFilter} onChange={(event) => setTagFilter(event.target.value)} className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-bold normal-case tracking-normal text-stone-700">
                {tagFilters.map((value) => <option key={value} value={value}>{value === "all" ? "All tags" : value}</option>)}
              </select>
            </label>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={clearFilters} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-black text-stone-700">Clear filters</button>
            <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black text-red-700">{filteredQuestions.length} shown</span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-5 shadow-sm">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Coverage and score by lesson</div>
          <div className="mt-4 grid gap-2 md:grid-cols-2">
            {byLesson.map(({ lesson, count, answered, correct }) => (
              <a key={lesson.id} href={amlaLessonHref(lesson)} className="rounded-2xl border border-stone-200 bg-stone-50 p-3 text-sm font-bold leading-6 text-stone-700 transition hover:bg-white">
                <span className="font-black text-stone-950">{lesson.code}</span> · {correct}/{answered || 0} correct · {count} total
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white/80 p-5 shadow-sm">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Review status</div>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {[
            ["Answered", `${answeredCount} / ${QUESTIONS.length}`],
            ["Correct", `${score}`],
            ["Current view", `${filteredQuestions.length} questions`],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">{label}</div>
              <div className="mt-1 text-2xl font-black text-stone-950">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="question-bank" className="mt-10 scroll-mt-28 grid gap-5">
        {filteredQuestions.length === 0 ? (
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 text-sm font-bold leading-7 text-stone-600">
            No questions match the current filters.
          </div>
        ) : null}
        {filteredQuestions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
            answer={answers[question.id]}
            setAnswer={(value) => setAnswer(question.id, value)}
            showFeedback={showFeedback}
            locked={locked}
          />
        ))}
      </section>
    </main>
  );
}
